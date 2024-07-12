const bcrypt = require('bcrypt');
const User = require('../model/User');
const Post = require('../model/Post');
const Comment = require('../model/Comment');
const verifyToken = require('../verifyToken');

// Update user
exports.updateuser = ( verifyToken , async (req, res) => {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete user
exports.deleteuser =  (verifyToken , async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        await Post.deleteMany({ userId: req.params.id });
        await Comment.deleteMany({ userId: req.params.id });
        res.status(200).json("User has been deleted!");
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get user
exports.user = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json(error);
    }
};
