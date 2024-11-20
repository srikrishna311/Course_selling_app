import express, { json } from "express";
import { config } from 'dotenv';
import cors from "cors";
import adminRoute from "./routes/admin.js";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import connectDB from "./db/db.js";
config();

const app = express();

app.use(cors());
app.use(json());

app.use("/auth", authRoute);
app.use("/admin", adminRoute);
app.use("/user", userRoute);
const Port = process.env.Port || 3000;

app.listen(Port, async () => {
  try {
    await connectDB();
    console.log(`Listening on ${Port}`);
  } catch (error) {
    console.log("Error from Backend");
    console.log(error);
  }
});
