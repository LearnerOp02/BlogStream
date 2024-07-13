import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useParams, useNavigate,Link } from 'react-router-dom';
import Comment from '../components/Comment';
import { IF } from '../url';

const PostDetails = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const fetchPost = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/${postId}`);
      setPost(res.data);
      console.log(res.data);
    } catch (err) {
      console.log('Error fetching post:', err);
    }
  };

  const fetchPostComments = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/post/${postId}`);
      setComments(res.data);
    } catch (err) {
      console.log('Error fetching comments:', err);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchPostComments();
  }, [postId]);

  const handleDeletePost = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/${postId}`);
      navigate("/write");
    } catch (err) {
      console.log('Error deleting post:', err);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    if (!user._id) {
      navigate('/login');
      return;
    }
    try {
      await axios.post("http://localhost:8000/api/create/comment", {
        comment,
        username: user.username,
        postId,
        userId: user._id
      });
      setComment("");
      fetchPostComments();  // Refresh comments after posting
    } catch (err) {
      console.log('Error posting comment:', err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4" style={{ fontWeight: 'bold', fontFamily: 'Georgia, serif' }}>{post.title}</h1>
        {user._id && post.userId === user._id && (
          <div className="d-flex align-items-center">
            <button onClick={() => navigate(`/edit/${postId}`)} className="btn btn-outline-primary mx-1" style={{ fontSize: '1.2rem' }}>
              <BiEdit size={24} />
            </button>
            <button onClick={handleDeletePost} className="btn btn-outline-danger mx-1" style={{ fontSize: '1.2rem' }}>
              <MdDelete size={24} />
            </button>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="text-muted" style={{ fontSize: '1rem', fontStyle: 'italic' }}>@{post.username}</p>
        <p className="text-muted" style={{ fontSize: '1rem', fontStyle: 'italic' }}>{new Date(post.updatedAt).toDateString()}</p>
      </div>
      <img
        src={IF + post.photo}
        className="img-fluid mt-4 rounded shadow-lg"
        alt="Post"
      />
      <p className="mt-4" style={{ fontSize: '1.2rem', lineHeight: '1.7', fontFamily: 'Georgia, serif' }}>{post.description}</p>
      {post.categories && (
        <div className="categories-section d-flex align-items-center mt-3">
          <h5 className="me-3 mb-0">Categories:</h5>
          <div className="d-flex mt-3 flex-wrap">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="badge me-2 mb-2"
                style={{
                  backgroundColor: "#f0f8ff",
                  color: "#333",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  border: "1px solid #ccc",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="mt-5">
        <h2 className="h4 font-weight-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>Comments</h2>
        {comments?.map((c) => (
          <Comment key={c._id} c={c} post={post} fetchPostComments={fetchPostComments} />
        ))}
        {user._id ? (
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mt-4 mb-4">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="form-control mr-md-2 mb-2 mb-md-0"
              type="text"
              placeholder="Write a comment"
              style={{ borderRadius: '30px', padding: '0.75rem 1.5rem' }}
            />
            <button onClick={postComment} type="button" className="btn btn-primary" style={{ borderRadius: '30px', padding: '0.75rem 2rem' }}>Add</button>
          </div>
        ) : (
          <p className="text-muted">Please <Link to="/login">log in</Link> to write a comment.</p>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
