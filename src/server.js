'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const {DBconction} = require('./DBconction')

DBconction()

app.get('/', (req,res)=>{

    res.send("ddddddddddd")
});




const start = (port) => {
  app.listen(port, () => console.log(`server starts on ${port}`));
};

module.exports = {
  app,
  start,
};