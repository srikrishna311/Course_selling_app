import { Admin } from "../models/index.js";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  const admin = await Admin.findOne({ username: req.user.username });
  if (!admin) {
    res.status(403).send("Admin does not exist");
  }
  res.json({
    username: admin.username
  })
};

export const signup = async (req, res) => {
  const Secret = process.env.Secret;
  const { username, password } = req.body;
  const excacc = await Admin.findOne({ username });
  if (excacc) {
    res.status(403).send("Admin already exists")
  }
  else {
    const newadmin = new Admin({ username, password });
    await newadmin.save();
    const token = jwt.sign({ username, role: 'admin' }, Secret, { expiresIn: '1h' });
    res.json({ message: "Successfully created an admin", token });
  }
};

export const login = async (req, res) => {
  const Secret = process.env.Secret;
  const { username, password } = req.body;
  const exacc = await Admin.findOne({ username, password });
  if (exacc) {
    const token = jwt.sign({ username, role: 'admin' }, Secret, { expiresIn: '1h' });
    res.json({ message: "logged in", token });
  }
  else {
    res.status(403).send("wrong username or password");
  }
};
