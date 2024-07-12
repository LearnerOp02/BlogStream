import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePost from '../components/HomePost';
import { useParams, useLocation } from 'react-router-dom';

const Blogs = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState(null);
  const { search } = useLocation();
  const user = JSON.parse(localStorage.getItem('user')) || {};

  const fetchPost = async () => {
    if (!postId) return;
    try {
      const res = await axios.get(`http://localhost:8000/api/post/${postId}`);
      setPost(res.data);
    } catch (err) {
      console.log('Error fetching post:', err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [search, postId]);

  return (
    <div className='container-fluid py-5' style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '0 10%' }}>
      <div className='text-center mb-5'>
        <h1 className='display-4' style={{ fontWeight: 'bold', color: '#333' }}>Our Blog</h1>
        <p className='lead' style={{ color: '#777' }}>Discover the featured articles and insights from our talented writers.</p>
      </div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center'>
        {post ? (
          <HomePost key={post._id} post={post} />
        ) : (
          <p className='text-center'>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
