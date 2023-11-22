import { NextFunction, Request, Response } from "express";
import PublicProfile from "../models/PublicProfile.js";

// get profile, modify bio, modify skills, modify education, modify experiences, modify projects (individual paths)

export const getPublicProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //gets the profile
    const publicprofile = await PublicProfile.findOne({
      username: req.params.username,
    });
    if (!publicprofile) {
      return res.status(401).send("User not found");
    }
    return res
      .status(200)
      .json({ message: "OK", publicprofile: publicprofile });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const modifyBio = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, phone_number, email, location, about, pronouns } = req.body;
  try {
    //user token check
    const publicprofile = await PublicProfile.findOne({
      username: req.params.username,
    });
    if (!publicprofile) {
      return res.status(401).send("User not found");
    }

    // Changes the name, phone number, email, location, and about sections
    publicprofile.name = name;
    publicprofile.pronouns = pronouns;
    publicprofile.phone_number = phone_number;
    publicprofile.email = email;
    publicprofile.location = location;
    publicprofile.about = about;

    await publicprofile.save();

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const modifySkills = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { skills } = req.body;
  try {
    //gets the profile
    const publicprofile = await PublicProfile.findOne({
      username: req.params.username,
    });

    if (!publicprofile) {
      return res.status(401).send("User not found");
    }
    // changes the skills array.
    publicprofile.skills = skills;
    await publicprofile.save();

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const modifyEducation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { education } = req.body;
  try {
    //gets the profile
    const publicprofile = await PublicProfile.findOne({
      username: req.params.username,
    });

    if (!publicprofile) {
      return res.status(401).send("User not found");
    }

    // changes the education array.
    publicprofile.education = education;
    await publicprofile.save();

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const modifyExperience = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { experience } = req.body;
  try {
    //gets the profile
    const publicprofile = await PublicProfile.findOne({
      username: req.params.username,
    });

    if (!publicprofile) {
      return res.status(401).send("User not found");
    }

    // changes the experience array.
    publicprofile.experience = experience;
    await publicprofile.save();

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const modifyProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { projects } = req.body;
  try {
    //gets the profile
    const publicprofile = await PublicProfile.findOne({
      username: req.params.username,
    });

    if (!publicprofile) {
      return res.status(401).send("User not found");
    }

    // changes the projects array.
    publicprofile.projects = projects;
    await publicprofile.save();

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
