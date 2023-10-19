const MessageModel = require("../models/chatModel.js");

module.exports.addMessage = async (req, res) => {
  try {
    const {message}  = req.body;

    const data = await MessageModel.create({
      message: { text: message },
    });
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(500).json({ error: "Failed to add message to the database" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while adding the message" });
  }
};


module.exports.getAllMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find();
    return res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while fetching messages" });
  }
};
