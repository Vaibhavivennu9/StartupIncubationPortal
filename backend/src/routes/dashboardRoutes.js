const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const { getDashboard } = require("../controllers/dashboardController");

router.get(
    "/",
    authMiddleware,
    roleMiddleware("admin"),
    getDashboard
);

module.exports = router;