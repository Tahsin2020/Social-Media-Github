const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ongoingProjectSchema = new Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: String, required: true },
    recruitment_end_date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const ongoingProject = mongoose.model("Ongoing Project", ongoingProjectSchema);

module.exports = ongoingProject;
