import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/register", { username, email, password });
      setUsername("");
      setEmail("");
      setPassword("");
      setError(false);
      toast.success("Registration successful");
      navigate('/login');
    } catch (error) {
      setError(true);
      toast.error("Error while registering.");
      console.log(error);
    }
  };

  return (
    <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: '#eef2f7' }}>
      <div className='bg-white shadow-lg rounded p-4 p-md-5 w-100' style={{ maxWidth: '450px', borderRadius: '20px' }}>
        <h1 className='h4 mb-4 text-center text-dark' style={{ fontWeight: 'bold' }}>Join Us Today</h1>
        <form onSubmit={handleRegister}>
          <div className='mb-3'>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className='form-control'
              type='text'
              placeholder='Username'
              value={username}
              required
              style={{ padding: '12px', fontSize: '16px', borderRadius: '10px', border: '1px solid #ced4da', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div className='mb-3'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='form-control'
              type='email'
              placeholder='Email'
              value={email}
              required
              style={{ padding: '12px', fontSize: '16px', borderRadius: '10px', border: '1px solid #ced4da', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div className='mb-3'>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='form-control'
              type='password'
              placeholder='Password'
              value={password}
              required
              style={{ padding: '12px', fontSize: '16px', borderRadius: '10px', border: '1px solid #ced4da', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            />
          </div>
          <button
            className='btn btn-primary btn-block'
            type='submit'
            style={{ padding: '12px', fontSize: '16px', borderRadius: '10px', backgroundColor: '#007bff', borderColor: '#007bff', fontWeight: 'bold' }}
          >
            Register
          </button>
          {error && <h3 className='text-danger text-sm mt-3'>Something went wrong</h3>}
        </form>
        <div className='text-center mt-4'>
          <p className='text-muted'>Already have an account? <Link to='/login' className='text-primary' style={{ textDecoration: 'none', fontWeight: 'bold' }}>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
