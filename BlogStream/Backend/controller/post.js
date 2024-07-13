const express = require('express');
const bcrypt = require('bcrypt');
const Post = require('../model/Post');
const User = require('../model/User');
const mongoose = require('mongoose')
const verifyToken = require('../verifyToken');

//Create
exports.create = (verifyToken, async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update
exports.update = (verifyToken, async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Delete
exports.delete = (verifyToken, async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted!");
    } catch (error) {
        res.status(500).json(error);
    }
});

//Post details
exports.postdetails = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({});

        // Log each post's _id to identify the issue
        posts.forEach(post => {
            console.log('Post ID:', post._id);
            if (!mongoose.Types.ObjectId.isValid(post._id)) {
                console.error('Invalid ObjectId found:', post._id);
            }
        });
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// User posts
exports.userPosts = async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.params.userId })
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json(err)
    }
};

exports.getPostsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log(`Fetching posts for user ID: ${userId}`);
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        // Find posts by user ID
        const posts = await Post.find({ userId: userId });
        // if (posts.length === 0) {
        //     console.log(`No posts found for user ID: ${userId}`);
        // } else {
        //     console.log(`Posts found: ${posts.length}`);
        // }
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};




