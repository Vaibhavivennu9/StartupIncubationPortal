const mongoose=require("mongoose");
const User=require('../models/User');
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{});
        console.log("MongoDB connected successfully https://localhost:27017/startupdb");
        console.log("Connected Database:", mongoose.connection.name);
        console.log("Connection Host:", mongoose.connection.host);
        console.log("Collection:", User.collection.name);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
module.exports=connectDB;