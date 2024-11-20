import { authenticatejwt } from "../middleware/auth.js";
import { Router } from "express";
import { getAllCourses, purchaseCourse, purchased, userLogin, userSignup } from "../controller/user.controller.js";
const router = Router();

router.post("/userSignup", userSignup);

router.post("/userLogin", userLogin);

router.get("/courses", authenticatejwt, getAllCourses);

router.post("/courses/:courseId", purchaseCourse);

router.get("/purchasedCourses", authenticatejwt, purchased);

export default router;
