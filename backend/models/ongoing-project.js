const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ongoingProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: String, required: true },
    recruitment_end_date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const ongoingProject = mongoose.model("OngoingProject", ongoingProjectSchema);

module.exports = User;
