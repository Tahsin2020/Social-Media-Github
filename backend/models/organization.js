const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const organizationSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    title: { type: String, required: true },
    role: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
