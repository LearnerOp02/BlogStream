import { useContext } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light shadow-lg rounded' style={{ padding: '10px 20px' }}>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand text-dark' style={{ fontSize: '1.8rem', marginLeft: '20px', marginRight: '20px', fontWeight: 'bold' }}>
          Blog Stream
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-center' id='navbarNav' style={{ marginLeft: '20px', marginRight: '20px' }}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link text-dark' style={{ margin: '0 15px', fontWeight: '500' }}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/blogs' className='nav-link text-dark' style={{ margin: '0 15px', fontWeight: '500' }}>Blogs</Link>
            </li>
            <li className='nav-item'>
              <Link to='/aboutus' className='nav-link text-dark' style={{ margin: '0 15px', fontWeight: '500' }}>About Us</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-link text-dark' style={{ margin: '0 15px', fontWeight: '500' }}>Contact Us</Link>
            </li>
            {user ? (
              <>
                <li className='nav-item'>
                  <Link to='/write' className='nav-link text-dark' style={{ margin: '0 15px', fontWeight: '500' }}>Write</Link>
                </li>
                <li className='nav-item'>
                  <Link to={`/profile/${user._id}`} className='nav-link text-dark' style={{ margin: '0 15px', fontWeight: '500' }}>Profile</Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link to='/login' className='nav-link text-dark' style={{ margin: '0 15px', fontWeight: '500' }}>Login</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/register' className='nav-link text-dark' style={{ margin: '0 15px', fontWeight: '500' }}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
