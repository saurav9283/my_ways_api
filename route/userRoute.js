const express = require('express');
const { register , login , Avatar , allusers } = require('../controllers/userController.js');
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;