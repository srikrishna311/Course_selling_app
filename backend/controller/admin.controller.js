import { Course } from "../models/index.js";

export const postCourse = async (req, res) => {
  const course = new Course(req.body)
  await course.save();
  res.json({ message: "successfully created", courseId: course.id });
};

export const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
  if (course) {
    res.send("course updated successfully");
  }
  else {
    res.status(404).send("Course not found");
  }
};

export const getCourse = async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
};

export const specificCourse = async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  res.json({ course });
};

