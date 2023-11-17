import mongoose from "mongoose";
import itemSchema from "./Item.js";

// I have to change what's inside these objects/schemas. I don't think I need chatschema, but I am wondering about skills.

const PrivateProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    length: 6,
  }
});

export default mongoose.model("Private Profile", PrivateProfileSchema);
