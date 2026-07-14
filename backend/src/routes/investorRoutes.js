const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const {
    expressInterest,
    getMyInterests
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

module.exports = router;