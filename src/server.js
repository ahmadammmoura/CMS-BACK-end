"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

//////// Routes //////

const AuthRouter = require("./routes/auth.route");
const adminRouter = require("./routes/admin.route")
const customerRouter = require('./routes/customer.route')


/////// Data base conncetion //////
const { DBconction } = require("./DBconction");
const res = require("express/lib/response");
DBconction();
app.use('/test',(req,res)=>{
  res.send("Ddddddddddddddddd")
});

app.use('/',AuthRouter);
app.use(`/admin`, adminRouter);
app.use('/customer', customerRouter);

const start = (port) => {
  app.listen(port, () => console.log(`server starts on ${port}`));
};

module.exports = {
  app,
  start,
};
