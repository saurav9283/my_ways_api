const express = require('express');

const { addMessage } = require('../controllers/messageController.js');
const router = express.Router();

router.post("/addmsg/", addMessage);

module.exports = router;