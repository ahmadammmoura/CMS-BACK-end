"use strict";


const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const SECRET = "abcdf"
const Schema = require('../models/complaint.model')
const userSchema = mongoose.Schema({
  fullName:{type: String},
  id: {type: String},
  role: { type: String, default: "customer" },
  username: { type: String, required: true },
  password: { type: String, required: true },
  complaint:[Schema.complaintSchema]
});


userSchema.statics.generateToken = function (user) {
  let userData = {
    username: user.username,
    fullName: user.fullName,
    role: user.role,
  };
  return jwt.sign(userData, SECRET);
};


const User = mongoose.model("user", userSchema);



module.exports = User;

