const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
    startupName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        enum: ["Idea", "Prototype", "MVP", "Growth", "Scaling"],
        required: true
    },
    teamSize: {
        type: Number,
        required: true
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    fundingRequired: {
        type: Number
    },
    assignedMentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
},
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    mentorFeedback: {
    type: String
},


reviewStatus: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
}
}, {
    timestamps: true
});

module.exports = mongoose.model("Startup", startupSchema);