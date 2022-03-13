"use strict";

const bcrypt = require("bcrypt");
const User = require("../Models/user.model");
const base64 = require("base-64");

module.exports = async (req, res,next) => {
  let basicHeaderParts = req.headers.authorization.split(" "); // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop(); // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(":"); // username, password


  
  

  try {
    const user = await User.findOne({ username: username });


    

    const valid = await bcrypt.compare(password, user.password);

    
    if (valid) {
      req.token = User.generateToken(user);
      
      
      next();
    } else {
      throw new Error("Invalid User");
    }
  } catch (error) {
    res.status(403).send(error);
  }
};
