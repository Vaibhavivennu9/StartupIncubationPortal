const Startup = require("../models/Startup");

const mentorDashboard = async (req, res) => {

    try {

        const startups = await Startup.find({
            assignedMentor: req.user.id
        });

        res.status(200).json({
            totalAssigned: startups.length,
            startups
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const getAssignedStartups = async (req, res) => {

    try {

        const startups = await Startup.find({
            assignedMentor: req.user.id
        }).populate("createdBy", "name email");

        res.status(200).json(startups);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const reviewStartup = async (req, res) => {

    try {

        const { feedback, reviewStatus } = req.body;

        const startup = await Startup.findById(req.params.id);

        if (!startup) {
            return res.status(404).json({
                message: "Startup not found"
            });
        }

        startup.mentorFeedback = feedback;
        startup.reviewStatus = reviewStatus;

        await startup.save();

        res.status(200).json({
            message: "Review submitted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    mentorDashboard,
    getAssignedStartups,
    reviewStartup
};