const router = require('express').Router();
const {getMyComplaints,getOneComplaint,creatComplaint} = require('../controllers/customer.controllers')
const bearer = require('../middlewares/bearerAuth')

router.get('/complaint',bearer, getMyComplaints); // to get all the Complaints in the system

router.get('/complaint/:id',bearer,getOneComplaint); // to get one of  the Complaints 

router.post('/complaint',bearer,creatComplaint); // to create the Complaint


module.exports = router;