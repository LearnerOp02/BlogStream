import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineLogout, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import ProfilePost from '../components/ProfilePost';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const [user, setUser] = useState({});

  // // Fetch only posts created by the current user
  // const fetchPosts = async () => {
  //   try {
  //     const userData = JSON.parse(localStorage.getItem('user'));
  //     if (userData) {
  //       const res = await axios.get(`http://localhost:8000/api/all/posts`); // Fetch posts for the specific user
  //       setPosts(res.data);
  //       console.log(res.data);
  //     }
  //   } catch (err) {
  //     console.log('Error fetching posts:', err);
  //   }
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  const { userId } = useParams(); // Get the user ID from the URL parameters

  // Fetch posts for the specific user
  const fetchPosts = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        setUser(userData);
        console.log(userData);
      }
      console.log(`Fetching posts for user ID: ${user._id}`);
      const res = await axios.get(`http://localhost:8000/api/userpost/${user._id}/posts`); // Fetch posts by user ID
      setPosts(res.data); // Set the posts state with the response data
      console.log(res.data);    
    } catch (err) {
      toast.error('Error fetching posts');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [user._id]);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8000/api/logout');
      logout();
      toast.success("User logged out successfully");
      navigate('/login');
    } catch (err) {
      toast.error("Error while logging out");
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8000/api/user/${user._id}`, { // Correctly pass the user ID
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setUser(null);
      toast.success("User deleted account successfully");
      navigate('/register');
      window.location.reload(); // Reload the page after deletion
    } catch (err) {
      toast.error("Error while deleting the account");
      console.log(err);
    }
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-12'>
          <div className='card shadow border-0 rounded-3 mb-4'>
            <div className='card-body text-center'>
              <div className='mb-3'>
                <div className='rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto' style={{ width: '100px', height: '100px' }}>
                  <span className='text-white fs-3'>{user.username?.[0]}</span>
                </div>
              </div>
              <h5 className='card-title text-dark mb-2'>{user.username}</h5>
              <p className='text-muted mb-4'>{user.email}</p>
              <button
                onClick={() => navigate('/editprofile')}
                className='btn btn-primary d-flex align-items-center justify-content-center mb-2 w-100'
                style={{ borderRadius: '30px', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
              >
                <FaEdit className='me-2' /> Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className='btn btn-warning d-flex align-items-center justify-content-center mb-2 w-100'
                style={{ borderRadius: '30px', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
              >
                <MdOutlineLogout className='me-2' /> Logout
              </button>
              <button
                onClick={handleDelete}
                className='btn btn-danger d-flex align-items-center justify-content-center w-100'
                style={{ borderRadius: '30px', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
              >
                <MdDelete className='me-2' /> Delete Account
              </button>
            </div>
          </div>
        </div>
        {posts.length > 0 && (  // Only display the Recent Posts section if there are posts
          <div className='col-12'>
            <div className='card shadow border-0 rounded-3'>
              <div className='card-body'>
                <h5 className='card-title text-dark mb-4'>Recent Posts</h5>
                <div className='d-flex flex-wrap'>
                  {posts.map((post) => (
                    <ProfilePost key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
