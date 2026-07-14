const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const {
    mentorDashboard,
    getAssignedStartups,
    reviewStartup
} = require("../controllers/mentorController");

router.get(
    "/dashboard",
    authMiddleware,
    roleMiddleware("mentor"),
    mentorDashboard
);

router.get(
    "/assigned-startups",
    authMiddleware,
    roleMiddleware("mentor"),
    getAssignedStartups
);

router.put(
    "/review/:id",
    authMiddleware,
    roleMiddleware("mentor"),
    reviewStartup
);

module.exports = router;