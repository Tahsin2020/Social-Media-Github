import mongoose from "mongoose";

// Item can represent Education, Ongoing Projects, Completed Projects, Experiences/Positions.

const ProjectSchema = new mongoose.Schema({
  start_date: { type: Date, required: true },
  end_date: { type: Date },
  name: { type: String, required: true },
  description: { type: String },
  link: { type: String },
  technologies: [{ type: String }],
  recruitment_end_date: { type: Date },
  recruiting: { type: Boolean },
});

export default ProjectSchema;
