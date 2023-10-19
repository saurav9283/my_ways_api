const MessageModel = require("../models/chatModel.js");

module.exports.addMessage = async (req, res) => {
  try {
    const { from, to, message } = req.body;
    const data = await MessageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) {
      return res.json(data);
    } else {
      return res.json({ msg: "Failed to add message to the database" });
    }
  } catch (error) {
    console.log(error);
  }
};
