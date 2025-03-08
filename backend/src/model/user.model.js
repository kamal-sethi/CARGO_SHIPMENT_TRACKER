import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "password must be 6 characters long"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
