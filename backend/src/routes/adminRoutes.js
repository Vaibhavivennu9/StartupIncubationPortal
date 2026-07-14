const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const adminController = require("../controllers/adminController");
const {
    getAllUsers,
    deleteUser,
    getAllStartups,
    deleteStartup,
    assignMentor,
    adminDashboard,
    getAllMentors
} = require("../controllers/adminController");

router.get(
    "/users",
    authMiddleware,
    roleMiddleware("admin"),
    getAllUsers
);

router.delete(
    "/users/:id",
    authMiddleware,
    roleMiddleware("admin"),
    deleteUser
);

router.get(
    "/startups",
    authMiddleware,
    roleMiddleware("admin"),
    getAllStartups
);

router.delete(
    "/startups/:id",
    authMiddleware,
    roleMiddleware("admin"),
    deleteStartup
);
router.put(
    "/assign-mentor",
    authMiddleware,
    roleMiddleware("admin"),
    assignMentor
);
router.get(
    "/dashboard",
    authMiddleware,
    roleMiddleware("admin"),
    adminDashboard
);
router.get(
    "/mentors",
    authMiddleware,
    roleMiddleware("admin"),
    getAllMentors
);
module.exports = router;