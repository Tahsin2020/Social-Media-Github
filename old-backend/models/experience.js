const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const organizationSchema = new Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    title: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Experience = mongoose.model("Experience", organizationSchema);

module.exports = Experience;
