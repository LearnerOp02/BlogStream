import React, { useContext, useEffect, useState } from 'react';
import HomePost from '../components/HomePost';
import axios from 'axios';
import { useLocation , Link} from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]); // Changed `post` to `posts`
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    try {
      console.log(search);
      const res = await axios.get(`http://localhost:8000/api/all/posts`);
      setPosts(res.data); // Changed `setPost` to `setPosts`
      console.log(res.data);
    } catch (err) {
      console.log('Error fetching posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <div className='container-fluid py-5' style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '0 10%' }}>
      <div className='text-center mb-5'>
        <h1 className='display-4' style={{ fontWeight: 'bold', color: '#333' }}>Welcome to Blog Stream</h1>
        <p className='lead' style={{ color: '#777' }}>Discover the featured articles and insights from our talented writers.</p>
      </div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center'>
        {posts.map((post) => (
          <>
          <Link to={user?`/posts/post/${post._id}`:"/login"}></Link>
          <HomePost key={post._id} post={post} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
