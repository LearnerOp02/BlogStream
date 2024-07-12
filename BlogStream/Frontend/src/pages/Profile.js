import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineLogout, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8000/api/logout');
      logout();
      toast.success("User logout successfully")
      navigate('/login');
    } catch (err) {
      
      toast.error("Error while logging out")
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8000/api/user/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setUser(null);
      toast.success("User deleted account successfully")
      navigate('/register');
    } catch (err) {
      toast.error("Error while deleting the account")
      console.log(err);
    }
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card shadow border-0 rounded-3'>
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
        <div className='col-md-8'>
          <div className='card shadow border-0 rounded-3'>
            <div className='card-body'>
              <h5 className='card-title text-dark mb-4'>Recent Posts</h5>
              <ul className='list-group list-group-flush'>
                {user.recentPosts && user.recentPosts.length > 0 ? (
                  user.recentPosts.map((post, index) => (
                    <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                      <a href={`/post/${post.id}`} className='text-primary fw-bold' style={{ textDecoration: 'none' }}>
                        {post.title}
                      </a>
                      <p className='text-muted mb-0'>{new Date(post.date).toLocaleDateString()}</p>
                    </li>
                  ))
                ) : (
                  <li className='list-group-item text-center text-muted'>No recent posts available.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
