const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST contact form message
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMsg = new Message({ name, email, message });
    await newMsg.save();
    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
