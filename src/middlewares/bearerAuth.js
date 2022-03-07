'use strict';

const User = require('../models/user.model')

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { next('Invalid Login') }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await User.authenticateWithToken(token);

    req.user = validUser;
    req.token = validUser.token;

    next();

  } catch (e) {
    res.status(403).send('Invalid Login');;
  }
}