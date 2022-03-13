'use strict';

const User = require("../Models/user.model");

module.exports = async (req, res, next) => {

  try {

    console.log(!req.headers.authorization)

    if (!req.headers.authorization) { next('Invalid Login') }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await User.authenticateToken(token);

    

    req.user = validUser;


    req.token = token;


    

    next();

  } catch (e) {
    res.status(403).send('Invalid Login');;
  }
}