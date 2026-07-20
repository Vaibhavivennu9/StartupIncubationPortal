const Startup = require("../models/Startup");
const User = require("../models/User");
// Create Startup
const createStartup = async (req, res) => {
    try {
        const {
            startupName,
            description,
            industry,
            stage,
            teamSize,
            website,
            location,
            fundingRequired
        } = req.body;

        if (!startupName || !description || !industry || !stage) {
            return res.status(400).json({
                message: "Please provide all required fields"
            });
        }

        const startup = await Startup.create({
            startupName,
            description,
            industry,
            stage,
            teamSize,
            website,
            location,
            fundingRequired,
            createdBy: req.user.id
        });

        return res.status(201).json({
            message: "Startup created successfully",
            startup
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error.message
        });
    }
};


const getMyStartup = async (req, res) => {

    try {

        const startup = await Startup.findOne({
            createdBy: req.user.id
        }).populate("createdBy", "name email");

        if (!startup) {
            return res.status(404).json({
                message: "No startup found"
            });
        }

        res.status(200).json(startup);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

};
// Get All Startups
const getAllStartups = async (req, res) => {
    try {

        const startups = await Startup.find().populate(
            "createdBy",
            "name email"
        );

        return res.status(200).json(startups);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Get Startup By Id
const getStartupById = async (req, res) => {
    try {

        const startup = await Startup.findById(req.params.id).populate("createdBy", "name email");

        if (!startup) {
            return res.status(404).json({
                message: "Startup not found"
            });
        }

        return res.status(200).json(startup);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Update Startup
const updateStartup = async (req, res) => {
    try {

        const startup = await Startup.findById(req.params.id);

        if (!startup) {
            return res.status(404).json({
                message: "Startup not found"
            });
        }

        if (startup.createdBy.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You are not authorized to update this startup"
            });
        }

        const updatedStartup = await Startup.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        return res.status(200).json({
            message: "Startup updated successfully",
            updatedStartup
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Delete Startup
const deleteStartup = async (req, res) => {
    try {

        const startup = await Startup.findById(req.params.id);

        if (!startup) {
            return res.status(404).json({
                message: "Startup not found"
            });
        }

        if (startup.createdBy.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You are not authorized to delete this startup"
            });
        }

        await Startup.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            message: "Startup deleted successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createStartup,
    getAllStartups,
    getStartupById,
    updateStartup,
    deleteStartup,
    getMyStartup
};