const express = require("express");
const router = express.Router();
const {getMyStartup } = require("../controllers/startupController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
    createStartup,
    getAllStartups,
    getStartupById,
    updateStartup,
    deleteStartup
} = require("../controllers/startupController");

router.post("/", authMiddleware, roleMiddleware("entrepreneur"),createStartup);

router.get("/", authMiddleware, roleMiddleware("entrepreneur", "investor", "mentor", "admin"),getAllStartups);
router.get(
    "/my-startup",
    authMiddleware,
    roleMiddleware("entrepreneur"),
    getMyStartup
);
router.get("/:id", authMiddleware, roleMiddleware("entrepreneur", "investor", "mentor", "admin"), getStartupById);

router.put("/:id", authMiddleware, roleMiddleware("entrepreneur"), updateStartup);

router.delete("/:id", authMiddleware, roleMiddleware("entrepreneur"), deleteStartup);

module.exports = router;