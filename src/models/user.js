import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  names: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  address: {
    state: String,
    city: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  age: Number,
  phone: String,
  picture: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default:"user"
  },
  isActive: {
    type: Boolean,
    default:true,
  },
},{timestamps:true});

const userModel = mongoose.model("user", userSchema);

export default userModel;