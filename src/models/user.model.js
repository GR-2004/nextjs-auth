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
      required: [true, "please provide an password"],
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

export const User = mongoose.model.users || mongoose.model("users", userSchema);
