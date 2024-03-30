import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please provide a username"],
      unique: [true, "username should be unique"],
    },
    email: {
      type: String,
      required: [true, "please provide an email"],
      unique: [true, "email should be unique"],
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

// Check if the model already exists, to avoid OverwriteModelError
export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
