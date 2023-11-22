import mongoose from "mongoose";
import EducationSchema from "./Schemas/Education.js";
import ExperienceSchema from "./Schemas/Experience.js";
import ProjectSchema from "./Schemas/Project.js";

// Item can represent Education, Ongoing Projects, Completed Projects, Experiences/Positions.

const PublicProfileSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String },
  pronouns: [{ type: String }],
  phone_number: { type: String },
  email: { type: String },
  location: { type: String },
  about: { type: String },
  experience: [ExperienceSchema],
  education: [EducationSchema],
  skills: [{ type: String }],
  projects: [ProjectSchema],
});

export default mongoose.model("Public Profile", PublicProfileSchema);
