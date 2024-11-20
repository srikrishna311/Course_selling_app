import { authenticatejwt } from "../middleware/auth.js";
import { Router } from "express";
import { getUser, login, signup } from "../controller/auth.controller.js";


const router = Router();

router.get("/me", authenticatejwt, getUser);

router.post("/signup", signup);

router.post("/login", login);

export default router;
