import mongoose from "mongoose";
import { createError } from "../error.js";
import Projects from "../models/Projects.js";
import Episodes from "../models/Episodes.js";
import User from "../models/User.js";
import { log } from "console";

export const createProject = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    // console.log(user);
    // let episodeList = [];
    // await Promise.all(
    //   req.body.episodes.map(async (item) => {
    //     const episode = new Episodes({ creator: user.id, ...item });
    //     const savedEpisode = await episode.save();
    //     episodeList.push(savedEpisode._id);
    //   })
    // );

    // Create a new project
    const project = new Projects({
      creator: user.id,
      // episodes: episodeList,
      name: req.body.name,
      desc: req.body.desc,
      thumbnail: req.body.thumbnail,
      githubURL: req.body.githubURL,
      tags: req.body.tags,
      // type: req.body.type,
      category: req.body.category,
    });
    const savedProject = await project.save();

    //save the project to the user
    await User.findByIdAndUpdate(
      user.id,
      {
        $push: { projects: savedProject.id },
      },
      { new: true }
    );

    res.status(201).json(savedProject);
  } catch (err) {
    next(err);
  }
};

// export const addepisodes = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user.id);

//     await Promise.all(
//       req.body.episodes.map(async (item) => {
//         const episode = new Episodes({ creator: user.id, ...item });
//         const savedEpisode = await episode.save();

//         // update the project
//         await Projects.findByIdAndUpdate(
//           req.body.projid,
//           {
//             $push: { episodes: savedEpisode.id },
//           },
//           { new: true }
//         );
//       })
//     );

//     res.status(201).json({ message: "Episode added successfully" });
//   } catch (err) {
//     next(err);
//   }
// };

export const getProjects = async (req, res, next) => {
  try {
    // Get all projects from the database
    const projects = await Projects.find().populate("creator", "name img");

    return res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    // Get the projects from the database
    // const project = await Projects.find();
    const project = await Projects.findById(req.params.id).populate(
      "creator",
      "name img"
    );
    return res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

export const favoriteProject = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  // console.log(user);
  const project = await Projects.findById(req.body.id);
  // console.log(project);
  let found = false;
  // Check if the user is the creator of the project
  console.log(user.id, project.creator);
  if (user.id === project.creator.toString()) {
    return next(createError(403, "You can't favorite your own project!"));
  }

  // Check if the project is already in the user's favorites
  await Promise.all(
    user.favorites.map(async (item) => {
      if (req.body.id == item) {
        //remove from favorite
        found = true;
        // console.log("he");
        await User.findByIdAndUpdate(
          user.id,
          {
            $pull: { favorites: req.body.id },
          },
          { new: true }
        );
        res.status(200).json({ message: "Removed from favorites" });
      }
    })
  );

  if (!found) {
    await User.findByIdAndUpdate(
      user.id,
      {
        $push: { favorites: req.body.id },
      },
      { new: true }
    );
    res.status(200).json({ message: "Added to favorites" });
  }
};

//add view

export const addView = async (req, res, next) => {
  try {
    await Projects.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("The view has been increased.");
  } catch (err) {
    next(err);
  }
};

//searches
export const random = async (req, res, next) => {
  try {
    const projects = await Projects.aggregate([
      { $sample: { size: 40 } },
    ]).populate("creator", "name img");
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
}; // Something wrong

export const mostpopular = async (req, res, next) => {
  try {
    const project = await Projects.find()
      .sort({ views: -1 })
      .populate("creator", "name img");
    // .populate("episodes");
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

export const getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const project = await Projects.find({ tags: { $in: tags } }).populate(
      "creator",
      "name img"
    );
    // .populate("episodes");
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

export const getByCategory = async (req, res, next) => {
  const query = req.query.q;
  try {
    const project = await Projects.find({
      category: { $regex: query, $options: "i" },
    }).populate("creator", "name img");
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

export const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    const project = await Projects.find({
      name: { $regex: query, $options: "i" },
    })
      .populate("creator", "name img")
      .limit(40);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};
