import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// import morgan from "morgan";

//routes
import authRoutes from "./routes/auth.js";
import podcastsRoutes from "./routes/podcast.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

/** Middlewares */
app.use(express.json());

//
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/podcasts", podcastsRoutes);
app.use("/api/user", userRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
const port = process.env.PORT || 3001;

const connect = () => {
  // mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

app.listen(port, () => {
  console.log("Connected", port);
  connect();
});
