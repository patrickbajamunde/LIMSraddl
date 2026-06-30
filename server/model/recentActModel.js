import mongoose from "mongoose";

const activitiesSchema = new mongoose.Schema({
    action: {
        type: String,
        enum: ['Create new', 'Updated', 'Deleted'],
    },

    fileType: {
        type: String,
        enum: ['ARF', 'ROA', 'Rabies']
    },

    itemId: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    userName:{
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

})

export default mongoose.model("Activities", activitiesSchema, "recentActivities");