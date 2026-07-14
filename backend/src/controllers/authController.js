const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const otpGenerator = require("otp-generator");
const sendOTPEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const RegisterUser = async (req, res) => {
    try {
        let { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "Please provide all required fields"
            });
        }
        name = name.trim();
        email = email.trim().toLowerCase();
        role = role.trim().toLowerCase();
        role = role.charAt(0).toUpperCase() + role.slice(1);


        if (!validator.isEmail(email)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }

        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({
                message: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
            digits: true
        });
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            otp,
            otpExpiry,
            isVerified: false
        });
        await sendOTPEmail(email, otp);

          return res.status(201).json({
              message: "Registration successful. Please check your email for the OTP."
          });
        console.log("Generated OTP:", otp);
         console.log("Saved User:", user);
        return res.status(201).json({
            message: "Registration successful. Please verify your email using the OTP sent.",
            email: user.email
        });

    } catch (error) {
        console.error(error);
           alert(error.response.data.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
const VerifyOTP = async (req, res) => {

    try {

        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                message: "Email and OTP are required"
            });
        }

        const user = await User.findOne({
            email: email.toLowerCase()
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.otp !== otp) {
            return res.status(400).json({
                message: "Invalid OTP"
            });
        }

        if (user.otpExpiry < Date.now()) {
            return res.status(400).json({
                message: "OTP has expired"
            });
        }

        user.isVerified = true;
        user.otp = null;
        user.otpExpiry = null;

        await user.save();

        return res.status(200).json({
            message: "Email verified successfully"
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }

};
const LoginUser = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide email and password"
            });
        }

        email = email.trim().toLowerCase();

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("login error: ",error);

        return res.status(500).json({
            message: error.message
        });
    }
};


const getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password -otp -otpExpiry");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = { RegisterUser, VerifyOTP,LoginUser, getProfile };