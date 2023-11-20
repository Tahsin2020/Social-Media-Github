import mongoose from "mongoose";

// Item can represent Education, Ongoing Projects, Completed Projects, Experiences/Positions.

const ExperienceSchema = new mongoose.Schema({
  start_date: { type: Date, required: true },
  end_date: { type: Date },
  organization: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String, required: true },
});

export default ExperienceSchema;
