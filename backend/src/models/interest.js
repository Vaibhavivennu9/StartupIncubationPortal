const mongoose = require("mongoose");

const interestSchema = new mongoose.Schema(
{
    investor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    startup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Startup",
        required: true
    },

    message: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Interest", interestSchema);