const Message = require("../models/Message");

const sendMessage = async (req, res) => {
    try {

        const { startupId, receiver, message } = req.body;

        const newMessage = await Message.create({
            startup: startupId,
            sender: req.user.id,
            receiver,
            message
        });

        res.status(201).json(newMessage);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getMessages = async (req, res) => {
    try {

        const messages = await Message.find({
            startup: req.params.startupId
        })
        .populate("sender", "name role")
        .sort({ createdAt: 1 });

        res.status(200).json(messages);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    sendMessage,
    getMessages
};