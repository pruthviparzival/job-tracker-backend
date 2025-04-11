// app.js - Update your existing app.js file

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.route.js";

const app = express();

// Configure CORS to allow credentials and specify your frontend origin
app.use(
  cors({
    origin: "https://job-tracker-frontend-jet.vercel.app/", // Replace with your React app's URL
    credentials: true, // This is important for cookies
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

export default app;
