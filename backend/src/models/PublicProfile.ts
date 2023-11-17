import mongoose from "mongoose";
import EducationSchema from "./Education.js";
import ExperienceSchema from "./Experience.js";
import ProjectSchema from "./Project.js";

// Item can represent Education, Ongoing Projects, Completed Projects, Experiences/Positions.

const itemSchema = new mongoose.Schema({
  username: { type: String, required: true },
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

export default itemSchema;
