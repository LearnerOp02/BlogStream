import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePost from '../components/HomePost';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api${postId}');
        console.log('Fetched Posts:', res.data); // Add this line
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className='container-fluid py-5' style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '0 10%' }}>
      <div className='text-center mb-5'>
        <h1 className='display-4' style={{ fontWeight: 'bold', color: '#333' }}>Welcome to Blog Stream</h1>
        <p className='lead' style={{ color: '#777' }}>Discover the featured articles and insights from our talented writers.</p>
      </div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center'>
        {posts.map((post) => (
          <HomePost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
