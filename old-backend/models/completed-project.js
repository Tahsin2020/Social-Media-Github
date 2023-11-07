const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const completeProjectSchema = new Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: String, required: true },
    completion_date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const completeProject = mongoose.model(
  "Complete Project",
  completeProjectSchema
);

module.exports = completeProject;
