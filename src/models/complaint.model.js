'use strict';

const mongoose = require('mongoose');

const complaintSchema = mongoose.Schema({
    id: {type: String},
    username:{type: String},
    date: { type: Date, default: Date.now },
    subject :{type: String},
    complaint:{type:String},
    Status:{type:String,default:"pending resolution"}

});

const Complaint = mongoose.model('complaint', complaintSchema);

module.exports = {
    Complaint,
    complaintSchema
};