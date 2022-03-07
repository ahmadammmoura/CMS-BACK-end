const router = require('express').Router();
const {getMyComplaints,getOneComplaint,creatComplaint} = require('../controllers/customer.controllers')


router.get('/complaint', getMyComplaints); // to get all the Complaints in the system

router.get('/complaint/:id',getOneComplaint); // to get one of  the Complaints 

router.post('/complaint',creatComplaint); // to create the Complaint


module.exports = router;