import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  addView,
  // addepisodes,
  createProject,
  likeProject,
  getByCategory,
  getByTag,
  getProjectById,
  getProjects,
  mostpopular,
  random,
  search,
} from "../controllers/projects.js";

const router = express.Router();

//create a Project
router.post("/", verifyToken, createProject);
//get all Projects
router.get("/", getProjects);
//get Project by id
router.get("/get/:id", getProjectById);

//add episode to a
// router.post("/episode", verifyToken, addepisodes);

//favorite/unfavorite Project
router.post("/like", verifyToken, likeProject);

//add view
router.post("/addview/:id", addView);

//searches
router.get("/mostpopular", mostpopular);
router.get("/random", random);
router.get("/tags", getByTag);
router.get("/category", getByCategory);
router.get("/search", search);

export default router;
