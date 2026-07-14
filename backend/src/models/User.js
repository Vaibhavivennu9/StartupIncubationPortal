const mangoose=require('mongoose');
const userSchema=new mangoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    },
    role: {
    type: String,
    enum: ["entrepreneur", "mentor", "investor", "admin"],
    required: true,
    lowercase: true
},
phone: {
    type: String,
    default: ""
},
otp:{
    type: String
},
otpExpiry:{
    type: Date
},
isVerified:{
    type: Boolean,
    default: false
}
},
{
    timestamps: true

});
const User=mangoose.model('User',userSchema);

module.exports=User;