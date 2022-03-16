const User = require("../Models/user.model");
const { v4: uuidv4 } = require("uuid");
const { Complaint } = require("../models/complaint.model");

const getMyComplaints = (req, res, next) => {
  const { username } = req.user;

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
    const { subject,isUrgent,message } = req.body;

    const {username} = req.user


    User.find({ username: username }, async function (err, user) {
      if (err) return console.error(err);

      
      const newcomplaint = {
        username,
        id: uuidv4(),
        subject,
        isUrgent,
        message
      };
      
      const complaint = new Complaint(newcomplaint)
      const record = await complaint.save(complaint)

      user[0].complaint.push(record);
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
