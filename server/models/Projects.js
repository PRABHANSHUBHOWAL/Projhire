import mongoose from "mongoose";
// import jwt from "jsonwebtoken";

const ProjectsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "",
    },
    githubRepo: {
      type: String,
      // required: true,
      unique: true,
    },
    deploymentLink: {
      type: String,
      required: true,
      unique: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      default: "project",
    },
    likes: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Projects", ProjectsSchema);
