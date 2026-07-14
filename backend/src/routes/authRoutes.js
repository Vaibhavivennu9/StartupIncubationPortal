const express=require('express');
const router=express.Router();
const {RegisterUser,VerifyOTP,LoginUser,getProfile}=require('../controllers/authController');
const authMiddleware = require("../middlewares/authMiddleware");
router.post('/register', RegisterUser);
router.post('/verify-otp', VerifyOTP);
router.post('/login', LoginUser);
router.get('/profile', authMiddleware, getProfile);
module.exports=router;