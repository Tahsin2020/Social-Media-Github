import { Router } from "express";
import {
  getPublicProfile,
  modifyBio,
  modifyEducation,
  modifyExperience,
  modifyProjects,
  modifySkills,
} from "../controllers/public-controllers.js";
import { verifyToken } from "../utils/token-manager.js";
const publicRoutes = Router();

publicRoutes.get("/:username", getPublicProfile);
publicRoutes.post("/:username/modify/bio", verifyToken, modifyBio);
publicRoutes.post("/:username/modify/education", verifyToken, modifyEducation);
publicRoutes.post("/:username/modify/experience", verifyToken, modifyExperience);
publicRoutes.post("/:username/modify/projects", verifyToken, modifyProjects);
publicRoutes.post("/:username/modify/skills", verifyToken, modifySkills);

export default publicRoutes;
