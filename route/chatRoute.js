const express = require('express');

const { addMessage, getAllMessages } = require('../controllers/messageController.js');
const router = express.Router();

router.post("/addmsg/", addMessage);
router.get("/", getAllMessages);

module.exports = router;