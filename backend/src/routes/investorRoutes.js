const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const {
    expressInterest,
    getMyInterests,
    investorDashboard
} = require("../controllers/investorController");

router.post(
    "/interest/:startupId",
    authMiddleware,
    roleMiddleware("investor"),
    expressInterest
);

router.get(
    "/interests",
    authMiddleware,
    roleMiddleware("investor"),
    getMyInterests
);
router.get(
    "/dashboard",
    authMiddleware,
    roleMiddleware("investor"),
    investorDashboard
);
console.log("Investor Routes Loaded");

router.get("/test", (req, res) => {
    res.send("Investor Route Working");
});

module.exports = router;