import mongoose from "mongoose";

// Item can represent Education, Ongoing Projects, Completed Projects, Experiences/Positions.

const itemSchema = new mongoose.Schema({
  username: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
  technologies: { type: String },
  completion_date: { type: Date },
  recruitment_end_date: { type: Date },
  title: { type: String },
  role: { type: String },
});

export default itemSchema;
