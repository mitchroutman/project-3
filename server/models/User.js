//import * as mongoose from 'mongoose';
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
//import bcrypt from 'bcrypt';
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true, match: [/.+@.+\..+/] },
    password: { type: String, required: true },
    project: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  },
  {
    toJSON: { virtuals: true },
    id: true,
  }
);

userSchema.virtual("projectCount").get(function () {
  return this.project.length;
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(err);
      }
      resolve(true);
    });
  });
};

const User = model("User", userSchema);

module.exports = User;
