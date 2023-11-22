import mongoose from "mongoose";

// Item can represent Education, Ongoing Projects, Completed Projects, Experiences/Positions.

const EducationSchema = new mongoose.Schema({
  start_date: { type: Date, required: true },
  end_date: { type: Date },
  organization: { type: String, required: true },
  degree: { type: String, required: true },
});

export default EducationSchema;
