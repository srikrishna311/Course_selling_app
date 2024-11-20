import jwt from "jsonwebtoken";
import { User, Course } from "../models/index.js";

export const userSignup = async (req, res) => {

  const Secret = process.env.Secret;
  const { username, password } = req.body;
  const exacc = await User.findOne({ username });
  if (exacc) {
    res.status(403).send("user already exits");
  }
  else {
    const user = new User({ username, password });
    await user.save();
    const token = jwt.sign({ username, role: "user" }, Secret, { expiresIn: "1h" });
    res.send({ message: "Successfully created a user", token });
  }
};

export const userLogin = async (req, res) => {
  const Secret = process.env.Secret;
  const { username, password } = req.body;
  const exacc = await User.findOne({ username, password });
  if (exacc) {
    const token = jwt.sign({ username, role: "user" }, Secret, { expiresIn: "1h" });
    res.send({ message: "logged in successfully", token });
  }
  else {
    res.status(403).send("user doesnt exist");
  }
};

export const getAllCourses = async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (course) {
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      user.purchasedCourses.push(course);
      await user.save();
      res.send("Course purchased");
    }
    else {
      res.status(403).send("User not found");
    }
  }
  else {
    res.status(404).send("Course not found");
  }
};

export const purchaseCourse = async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (course) {
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      user.purchasedCourses.push(course);
      await user.save();
      res.send("Course purchased");
    }
    else {
      res.status(403).send("User not found");
    }
  }
  else {
    res.status(404).send("Course not found");
  }
};

export const purchased = async (req, res) => {
  const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
  if (user) {
    res.send({ purchasecourses: user.purchasedCourses });
  }
  else {
    res.status(403).send("user not found")
  }
};
