import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: Schema.Types.ObjectId, ref: 'course' }]
});

const adminSchema = new Schema({
  username: String,
  password: String
});

const courseSchema = new Schema({
  title: String,
  description: String,
  imglink: String,
  price: Number,
  published: Boolean
});

const User = model('users', userSchema);
const Admin = model('admin', adminSchema);
const Course = model('course', courseSchema);

export {
  User,
  Admin,
  Course
}
