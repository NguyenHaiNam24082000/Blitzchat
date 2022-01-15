const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    creator: {
        type: userSchema,
        required: true,
    },
    members: {
        type: [userSchema],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});