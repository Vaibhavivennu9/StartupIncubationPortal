const express=require("express");
const cors=require("cors");
const app=express();

const authRoutes=require('./routes/authRoutes');
const startupRoutes=require('./routes/StartupRoutes');
console.log("Before Investor Routes");

const investorRoutes = require("./routes/investorRoutes");

console.log("After Investor Routes");
const adminRoutes=require('./routes/adminRoutes');
const dashboardRoutes=require('./routes/dashboardRoutes');
const mentorRoutes = require("./routes/mentorRoutes");
const messageRoutes = require("./routes/MessageRoutes");
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes);
app.use('/api/startups', startupRoutes);
app.use('/api/investor', investorRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use("/api/mentor", mentorRoutes);
app.use("/api/messages", messageRoutes);
app.get('/',(req,res)=>{
    res.send("Server is running ");
});
module.exports=app;