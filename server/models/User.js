import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    githubUsername: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    googleSignIn: {
      type: Boolean,
      required: true,
      default: false,
    },
    projects: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Projects",
      default: [],
    },
    liked: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Projects",
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
