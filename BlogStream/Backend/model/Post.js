const mongoose = require('mongoose');
const PostScheme = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        unique: true,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
    },
}, { timestamps: true })
module.exports = mongoose.model("Post", PostScheme)