import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cat, setCat] = useState('');
  const [cats, setCats] = useState([]);

  const addCategory = () => {
    if (cat.trim() !== '') {
      setCats([...cats, cat.trim()]);
      setCat('');
    }
  };

  const deleteCategory = (index) => {
    const updatedCats = cats.filter((_, i) => i !== index);
    setCats(updatedCats);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: '#f0f2f5', padding: '20px' }}>
      <div className='bg-white shadow-lg rounded p-4 p-md-5 w-100' style={{ maxWidth: '600px', borderRadius: '15px' }}>
        <h1 className='h4 mb-4 text-center' style={{ fontWeight: 'bold' }}>Edit Your Post</h1>
        <form className='w-100 d-flex flex-column'>
          {/* Post Title */}
          <div className='mb-3'>
            <input
              className='form-control py-3 px-4 rounded-lg'
              type='text'
              placeholder='Enter the updated post title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}
            />
          </div>
          {/* Post Description */}
          <div className='mb-3'>
            <textarea
              rows={8}
              className='form-control py-3 px-4 rounded-lg'
              placeholder='Enter the updated post description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}
            />
          </div>
          {/* File Upload */}
          <div className='mb-3'>
            <input
              className='form-control py-1'
              type='file'
              style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}
            />
          </div>
          {/* Category Input and Add Button */}
          <div className='d-flex align-items-center mb-3'>
            <input
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className='form-control py-3 px-4 rounded-lg'
              placeholder='Enter a new category'
              type='text'
              style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}
            />
            <button
              onClick={addCategory}
              className='btn btn-secondary py-2 px-4 rounded-lg ms-3'
              type='button'
              style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)', backgroundColor: '#6c757d', color: 'white', fontWeight: 'bold' }}
            >
              Add
            </button>
          </div>
          {/* Display Categories */}
          <div className='d-flex flex-wrap mb-3'>
            {cats.map((c, i) => (
              <div key={i} className='d-flex align-items-center bg-light rounded-pill px-3 py-2 me-3 mb-3' style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}>
                <p className='text-dark mb-0 me-2'>{c}</p>
                <ImCross
                  onClick={() => deleteCategory(i)}
                  className='text-white bg-danger rounded-circle cursor-pointer p-1'
                  style={{ fontSize: '0.8rem' }}
                />
              </div>
            ))}
          </div>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className='btn btn-primary w-100 py-2 rounded-lg mt-3'
            type='submit'
            style={{ backgroundColor: '#007bff', borderColor: '#007bff', fontWeight: 'bold', boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
