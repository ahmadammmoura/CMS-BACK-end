const User = require("../Models/user.model");

const getAllcostumer = (req, res, next) => {
  console.log("Sss");
  try {
    User.find({ role: "customer" }, function (err, user) {
      if (err) return console.error(err);

      res.send(user[0]);
    });
  } catch (e) {
    res.status(403).send(e);
  }
};

const getOneComplaint = (req, res, next) => {};

const editComplaint = async (req, res, next) => {
  const { index, Status, username } = req.body;

  await User.find({ username: username }, (err, user) => {
    if (err) console.log(err);

    user[0].complaint[index].Stats = Status;

    user[0].save();
    res.send(user[0]);
  });
};

const makeAdmin = async (req, res, next) => {

  const { role, username } = req.body;


  await User.find({ username: username }, (err, user) => {
    if (err) console.log(err);

    user[0].role = role;

    user[0].save();
    res.send(user[0]);
  });
};

module.exports = {
  getAllcostumer,
  getOneComplaint,
  editComplaint,
  makeAdmin,
};
