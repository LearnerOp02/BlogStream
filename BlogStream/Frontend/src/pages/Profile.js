import React from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8000/api/logout');
      localStorage.removeItem('token'); // Remove token from local storage
      navigate('/login');
      window.location.reload(); // Reload the page to update the navbar
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        {/* Profile Section */}
        <div className='col-md-4'>
          <div className='card shadow-lg border-0 rounded-4'>
            <img
              src='https://via.placeholder.com/150'
              className='card-img-top rounded-circle border border-4 border-primary'
              alt='Profile'
              style={{ maxHeight: '150px', objectFit: 'cover' }}
            />
            <div className='card-body text-center'>
              <h5 className='card-title text-dark mb-2'>John Doe</h5>
              <p className='card-text text-muted mb-3'>Web Developer & Blogger</p>
              <button
                href='/editprofile'
                className='btn btn-primary d-flex align-items-center justify-content-center mb-2'
                style={{ borderRadius: '30px', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
              >
                <FaEdit className='me-2' /> Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className='btn btn-danger d-flex align-items-center justify-content-center'
                style={{ borderRadius: '30px', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
              >
                <MdOutlineLogout className='me-2' /> Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className='col-md-8'>
          <div className='card shadow-lg border-0 rounded-4 mb-4'>
            <div className='card-body'>
              <h5 className='card-title text-dark mb-3'>Bio</h5>
              <p className='card-text text-muted' style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Hello! I am John Doe, a passionate web developer and avid blogger. I love to write about technology, web development, and my personal experiences in the tech world.
              </p>
            </div>
          </div>

          <div className='card shadow-lg border-0 rounded-4'>
            <div className='card-body'>
              <h5 className='card-title text-dark mb-3'>Recent Posts</h5>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                  <a href='/post/1' className='text-primary' style={{ textDecoration: 'none' }}>Understanding React Hooks</a>
                  <p className='text-muted mb-0'>Jan 15, 2024</p>
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                  <a href='/post/2' className='text-primary' style={{ textDecoration: 'none' }}>10 Tips for JavaScript Developers</a>
                  <p className='text-muted mb-0'>Jan 10, 2024</p>
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                  <a href='/post/3' className='text-primary' style={{ textDecoration: 'none' }}>How to Build a Blogging Platform with React</a>
                  <p className='text-muted mb-0'>Jan 5, 2024</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
