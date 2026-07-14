const User = require("../models/User");
const Startup = require("../models/Startup");
const getAllUsers = async (req, res) => {
    try {

        const users = await User.find().select("-password");

        return res.status(200).json(users);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};
const deleteUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        await User.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};
const getAllStartups = async (req, res) => {

    try {

        const startups = await Startup.find()
            .populate("createdBy", "name email");

        return res.status(200).json(startups);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};
const deleteStartup = async (req, res) => {

    try {

        const startup = await Startup.findById(req.params.id);

        if (!startup) {
            return res.status(404).json({
                message: "Startup not found"
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
const assignMentor = async (req, res) => {

    try {

        const { startupId, mentorId } = req.body;

        const startup = await Startup.findById(startupId);

        if (!startup) {
            return res.status(404).json({
                message: "Startup not found"
            });
        }

        const mentor = await User.findById(mentorId);
        console.log("Mentor:", mentor);

        console.log("Role:", mentor?.role);

       if (!mentor || mentor.role.toLowerCase() !== "mentor") {
    return res.status(404).json({
        message: "Mentor not found"
    });
}

        startup.assignedMentor = mentorId;

        await startup.save();

        res.status(200).json({
            message: "Mentor assigned successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const adminDashboard = async (req, res) => {

    try {

        const totalStartups = await Startup.countDocuments();

        const totalMentors = await User.countDocuments({
            role: "mentor"
        });

        const totalFounders = await User.countDocuments({
            role: "entrepreneur"
        });

        const startups = await Startup.find();

        let totalFunding = 0;

        startups.forEach((startup) => {
            totalFunding += startup.fundingRequired || 0;
        });

        res.status(200).json({
            totalStartups,
            totalMentors,
            totalFounders,
            totalFunding
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const getAllMentors = async (req, res) => {

    try {

        const mentors = await User.find({
            role: "mentor"
        }).select("-password -otp -otpExpiry");

        const mentorData = await Promise.all(

            mentors.map(async (mentor) => {

                const startupCount = await Startup.countDocuments({
                    assignedMentor: mentor._id
                });

                return {
                    _id: mentor._id,
                    name: mentor.name,
                    email: mentor.email,
                    assignedStartups: startupCount
                };

            })

        );

        res.status(200).json(mentorData);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {
    getAllUsers,
    deleteUser,
    getAllStartups,
    deleteStartup,
    assignMentor,
    adminDashboard,
    getAllMentors
};
