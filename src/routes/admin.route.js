const router = require('express').Router();

const {getAllcostumer,getOneComplaint,editComplaint,makeAdmin} = require('../controllers/admin.controllers')


router.put('/makeAdmin',makeAdmin); // to make any user an admin


router.get('/costumers', getAllcostumer); // to get all the Complaints in the system

router.get('/compaint/:id',getOneComplaint); // to get one of  the Complaints 

router.put('/compaint/:id',editComplaint); // to edit the Complaint

module.exports = router;