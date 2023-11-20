import { Router } from "express";
import {
  getPublicProfile,
  modifyBio,
  modifyEducation,
  modifyExperience,
  modifyProjects,
  modifySkills,
} from "../controllers/public-controllers.js";

const publicRoutes = Router();

publicRoutes.get("/", getPublicProfile);
publicRoutes.post("/modify/bio", modifyBio);
publicRoutes.get("/modify/education", modifyEducation);
publicRoutes.get("/modify/experience", modifyExperience);
publicRoutes.get("/modify/projects", modifyProjects);
publicRoutes.get("/modify/skills", modifySkills);

export default publicRoutes;
