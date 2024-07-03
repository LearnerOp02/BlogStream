import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light shadow'>
      <div className='container-fluid '>
        <Link to='/' className=' ml-5 mr-5 navbar-brand font-weight-bold text-dark'>
          Blog Stream
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse justify-content-center navbar-collapse ml-5 mr-5' id='navbarNav'>
          <ul className='navbar-nav '>
            <li className='nav-item ml-3 mr-3'>
              <Link to='/' className='nav-link text-dark'>Home</Link>
            </li>
            <li className='nav-item ml-3 mr-3'>
              <Link to='/blogs' className='nav-link text-dark'>Blogs</Link>
            </li>
            <li className='nav-item ml-3 mr-3'>
              <Link to='/aboutus' className='nav-link text-dark'>About Us</Link>
            </li>
            <li className='nav-item ml-3 mr-3'>
              <Link to='/login' className='nav-link text-dark'>Login</Link>
            </li>
            <li className='nav-item ml-3 mr-3'>
              <Link to='/register' className='nav-link text-dark'>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
