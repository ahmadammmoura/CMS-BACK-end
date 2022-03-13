"use strict";

const bcrypt = require("bcrypt");
const User = require("../Models/user.model");
const { v4: uuidv4 } = require("uuid");

const SECRET_KET_ADMINS = "123456";

const signUp = async (req, res) => {
  const userChecking = await User.findOne({ username: req.body.username });

  if (userChecking) {
    res.status(409).send("this user already exist");
  } else if (req.body.role === "admin") {
    if (req.body.key !== SECRET_KET_ADMINS) {
      res.status(409).send("the key is wrong");
    } else {
      validUser(req.body,res);
    }
  } else {
    validUser(req.body,res);
  }
};

const signIn = (req, res) => {

  
  res.status(200).json(req.token);

};

async function validUser(body,res) {
  try {
    body.password = await bcrypt.hash(body.password, 10);
    const user = new User({ ...body, id: uuidv4() });
    const record = await user.save(body);
    const token = User.generateToken(record);
    res.status(200).send({ token });
  } catch (e) {
    res.status(403).send(e);
  }
}

module.exports = {
  signUp,
  signIn,
};
