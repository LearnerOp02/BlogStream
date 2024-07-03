import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light'>
      <div className='bg-white shadow rounded p-4 p-md-5 w-100' style={{ maxWidth: '400px' }}>
        <h1 className='h4 mb-4 text-center text-dark'>Log in to your account</h1>
        <form>
          <div className='mb-3'>
            <input
              className='form-control'
              type='email'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-3'>
            <input
              className='form-control'
              type='password'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            className='btn btn-primary btn-block'
            type='submit'
          >
            Log in
          </button>
        </form>
        <div className='text-center mt-3'>
          <p className='text-muted'>New here? <Link to='/register' className='text-primary'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
