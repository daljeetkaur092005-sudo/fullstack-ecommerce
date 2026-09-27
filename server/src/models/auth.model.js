import mongoose from "mongoose";
const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    reuired: true,
    minLength: 5,
  },
  role: {
    type: String,
    enum: ["user", "seller"],
    default: "user",
  },
  refreshToken: {
    type: String
  },
});

const authModel = mongoose.model("users", authSchema);
export default authModel;
