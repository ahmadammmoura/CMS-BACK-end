const User = require("../Models/user.model");
const { v4: uuidv4 } = require("uuid");

const getMyComplaints = (req, res, next) => {
  const { username } = req.body;

  User.find({ username: username }, function (err, user) {
    if (err) return console.error(err);

    res.send(user[0].complaint);
  });
};

const getOneComplaint = (req, res, next) => {
  const { username } = req.body;
  const { id } = req.params;

  User.find({ username: username }, function (err, user) {
    if (err) return console.error(err);

    const record = user[0].complaint.filter((item) => item.id === id);

    res.send(record);
  });
};

const creatComplaint = async (req, res, next) => {
  try {
    const { username, subject, complaint } = req.body;

    User.find({ username: username }, function (err, user) {
      if (err) return console.error(err);
      const newcomplaint = {
        id: uuidv4(),
        subject,
        complaint,
      };


      user[0].complaint.push(newcomplaint);
      user[0].save();
      res.send(user[0]);
    });
  } catch (e) {
    res.status(403).send(e);
  }
};

module.exports = {
  getMyComplaints,
  getOneComplaint,
  creatComplaint,
};
