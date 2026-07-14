const Interest = require("../models/Interest");
const Startup = require("../models/Startup");

// POST /api/investor/interest/:startupId
const expressInterest = async (req, res) => {
    try {

        const startup = await Startup.findById(req.params.startupId);

        if (!startup) {
            return res.status(404).json({
                message: "Startup not found"
            });
        }

        const alreadyInterested = await Interest.findOne({
            investor: req.user.id,
            startup: req.params.startupId
        });

        if (alreadyInterested) {
            return res.status(400).json({
                message: "Interest already expressed"
            });
        }

        const interest = await Interest.create({
            investor: req.user.id,
            startup: req.params.startupId,
            message: req.body.message
        });

        return res.status(201).json({
            message: "Interest sent successfully",
            interest
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// GET /api/investor/interests
const getMyInterests = async (req, res) => {

    try {

        const interests = await Interest.find({
            investor: req.user.id
        }).populate("startup");

        return res.status(200).json(interests);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    expressInterest,
    getMyInterests
};