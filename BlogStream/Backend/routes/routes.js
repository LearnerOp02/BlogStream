const express = require('express');
const { register, login, logout, refetch } = require('../controller/auth');
const { update, delete: deletePost, getposts, postdetails, userposts, create, getAllPosts } = require('../controller/post');
const { createcomment, deletecomment, postcomment } = require('../controller/comment');
const { updateuser, deleteuser, user } = require('../controller/user');
const verifyToken = require('../verifyToken');
const router = express.Router();

//auth routes
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get("/refetch", refetch);

//user routes
router.put('/user/:id', updateuser);
router.delete('/user/:id', deleteuser);
router.get('/user/:id', user);

//post routes
router.post('/create',create)
router.put('/:id', update);
router.delete('/:id', deletePost);
router.get('/:id', postdetails);
router.get('/user/:userId', userposts);
router.get('/posts/:id', getAllPosts);

//comment routes
router.post('/create/comment', createcomment);
router.delete('/comment/:id', deletecomment);
router.get('/post/:postId', postcomment);

module.exports = router;
