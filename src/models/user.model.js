"use strict";


const mongoose = require("mongoose");
const Schema = require('../models/complaint.model')
const userSchema = mongoose.Schema({
  id: {type: String},
  role: { type: String, default: "customer" },
  username: { type: String, required: true },
  password: { type: String, required: true },
  complaint:[Schema.complaintSchema]
});
const User = mongoose.model("user", userSchema);

module.exports = User;

