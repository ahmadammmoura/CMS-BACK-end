const mongoose = require("mongoose");

const DBconction = () => {
  mongoose
    .connect(
      "mongodb+srv://root:9951061722@cluster0.cvuu4.mongodb.net/CMS?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("data connceted");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
    DBconction:DBconction
};