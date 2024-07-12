import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext'; 
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUserMethod } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/login", { email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.status === 200) {
        setUserMethod(res.data); 
        navigate("/");
        toast.success("Login successful");
      } else {
        setError(true);
      }
    } catch (err) {
      toast.error("Error while login");
    }
  };

  return (
    <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: '#eef2f7' }}>
      <div className='bg-white shadow-lg rounded p-4 p-md-5 w-100' style={{ maxWidth: '450px', borderRadius: '20px' }}>
        <h1 className='h4 mb-4 text-center text-dark' style={{ fontWeight: 'bold' }}>Welcome Back!</h1>
        <form onSubmit={handleLogin}>
          <div className='mb-3'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='form-control'
              type='email'
              placeholder='Email'
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
              required
              style={{ padding: '12px', fontSize: '16px', borderRadius: '10px', border: '1px solid #ced4da', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            />
          </div>
          <button
            className='btn btn-primary btn-block'
            type='submit'
            style={{ padding: '12px', fontSize: '16px', borderRadius: '10px', backgroundColor: '#007bff', borderColor: '#007bff', fontWeight: 'bold' }}
          >
            Log in
          </button>
          {error && <h3 className='text-danger text-sm mt-3'>Invalid email or password</h3>}
        </form>
        <div className='text-center mt-4'>
          <p className='text-muted'>New here? <Link to='/register' className='text-primary' style={{ textDecoration: 'none', fontWeight: 'bold' }}>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
