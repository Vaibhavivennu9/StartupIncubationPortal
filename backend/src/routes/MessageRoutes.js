const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {
    sendMessage,
    getMessages
} = require("../controllers/messageController");

router.post("/", authMiddleware, sendMessage);

router.get("/:startupId", authMiddleware, getMessages);

module.exports = router;