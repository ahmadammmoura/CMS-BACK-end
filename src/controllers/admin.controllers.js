const User = require("../Models/user.model");
const {Complaint} = require("../models/complaint.model")

const getAllcostumer = (req, res, next) => {
  try {
    Complaint.find({}, function (err, complaint) {
      if (err) return console.error(err);
      res.send(complaint);
    });
  } catch (e) {
    res.status(403).send(e);
  }
};

const getOneComplaint = (req, res, next) => {};

const editComplaint =  (req, res, next) => {
  const { id, Status,username } = req.body;

  console.log(id,Status,username)
  User.findOne({ username:username },(err,user)=>{
    console.log(user)
    const index = user.complaint.findIndex(element => element._id == id)
    user.complaint[index].Status = Status
    user.save()
  })

   Complaint.findOne({ _id: id }, (err, complaint) => {
    if (err) console.log(err);
  

    complaint.Status = Status;
    complaint.save();
    res.send(complaint);
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
