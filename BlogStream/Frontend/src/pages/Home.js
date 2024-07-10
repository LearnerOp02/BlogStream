import React, { useState } from 'react';
import HomePost from '../components/HomePost';

const Home = () => {
  // Assuming you have a list of posts
  const posts = [
    /* Replace these with your actual posts data */
    <HomePost key="1" />,
    <HomePost key="2" />,
    <HomePost key="3" />,
    <HomePost key="4" />,
    <HomePost key="5" />,
    <HomePost key="6" />,
    <HomePost key="7" />,
    <HomePost key="8" />,
    <HomePost key="9" />,
    <HomePost key="10" />,
  ];

  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts(posts.length); // Show all posts
  };

  return (
    <div className='container-fluid py-5' style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '0 10%' }}>
      <div className='text-center mb-5'>
        <h1 className='display-4' style={{ fontWeight: 'bold', color: '#333' }}>Welcome to Blog Stream</h1>
        <p className='lead' style={{ color: '#777' }}>Discover the featured articles and insights from our talented writers.</p>
      </div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center'>
        {posts.slice(0, visiblePosts)}
      </div>
      {visiblePosts < posts.length && (
        <div className='text-center mt-5'>
          <button 
            className='btn btn-outline-primary btn-lg' 
            style={{ borderRadius: '30px', padding: '10px 30px' }}
            onClick={loadMorePosts}
          >
            Load More Posts
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
