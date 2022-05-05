const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "https://i.ibb.co/cJZ28Qb/placeholder-profile-1.png",
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", UserSchema);
