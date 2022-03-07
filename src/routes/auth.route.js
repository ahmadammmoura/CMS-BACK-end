'use strict';

const router = require('express').Router();
const { signUp, signIn } = require('../controllers/auth.controllers');
const basic = require('../middlewares/basicAuth');

router.post('/signup', signUp);
router.post('/signin', basic, signIn);

module.exports = router;