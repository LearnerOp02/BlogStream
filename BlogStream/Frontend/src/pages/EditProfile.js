import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch user data from local storage
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Assuming you store JWT token in localStorage
            const response = await axios.put(`http://localhost:8000/api/user/${user._id}`, user, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success("User updated profile successfully")
            navigate('/profile/:id')
            // Update local storage with new user data
            localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error("Failed to update profile");
        }
    };

    return (
        <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: '#f0f4f8' }}>
            <div className='bg-white shadow rounded p-4 p-md-5 w-100' style={{ maxWidth: '400px', borderRadius: '15px' }}>
                <h1 className='h4 mb-4 text-center text-dark' style={{ fontWeight: '600' }}>Update Your Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <input
                            className='form-control'
                            type='text'
                            name='username'
                            placeholder='Username'
                            required
                            value={user.username || ''}
                            onChange={handleChange}
                            style={{ padding: '12px', fontSize: '14px', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            className='form-control'
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={user.email || ''}
                            onChange={handleChange}
                            required
                            style={{ padding: '12px', fontSize: '14px', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            className='form-control'
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={user.password || ''}
                            onChange={handleChange}
                            required
                            style={{ padding: '12px', fontSize: '14px', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <button
                        className='btn btn-primary btn-block'
                        type='submit'
                        style={{ padding: '12px', fontSize: '16px', borderRadius: '10px', backgroundColor: '#0056b3', borderColor: '#004d99', fontWeight: '600' }}
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;