const User = require("../models/User");
const Startup = require("../models/Startup");

const getDashboard = async (req, res) => {
    try {

        const totalUsers = await User.countDocuments();

        const totalStartups = await Startup.countDocuments();

        const totalEntrepreneurs = await User.countDocuments({
            role: "entrepreneur"
        });

        const totalInvestors = await User.countDocuments({
            role: "investor"
        });

        const totalMentors = await User.countDocuments({
            role: "mentor"
        });

        const totalAdmins = await User.countDocuments({
            role: "admin"
        });

        res.status(200).json({
            totalUsers,
            totalStartups,
            totalEntrepreneurs,
            totalInvestors,
            totalMentors,
            totalAdmins
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    getDashboard
};