import { Router } from "express";
import { authenticatejwt } from "../middleware/auth.js";
import { getCourse, postCourse, specificCourse, updateCourse } from "../controller/admin.controller.js";

const router = Router();

router.post("/courses", authenticatejwt, postCourse);

router.put("/courses/:courseId", authenticatejwt, updateCourse);

router.get("/courses", authenticatejwt, getCourse);

router.get("/course/:courseId", authenticatejwt, specificCourse);

export default router
