"use strict";

const bcrypt = require("bcrypt");
const User = require("../Models/user.model");
const { v4: uuidv4 } = require('uuid');


const signUp = async (req, res) => {
  const userChecking = await User.findOne({ username: req.body.username });

  if (userChecking) {
    res.status(409).send("this user already exist");
  } else {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = new User({...req.body,id:uuidv4()});
      const record = await user.save(req.body);
      res.status(200).json(record);
    } catch (e) {
      res.status(403).send(e);
    }
  }
};

const signIn = (req, res) => {
  res.status(200).json(req.user);
};

module.exports = {
  signUp,
  signIn,
};
