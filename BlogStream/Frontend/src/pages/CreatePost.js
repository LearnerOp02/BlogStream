import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';

const CreatePost = () => {
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
    // Add your logic to handle form submission
    console.log('Form submitted!');
  };

  return (
    <div className='container-fluid min-vh-80 d-flex justify-content-center align-items-center bg-light mt-4 mb-4'>
      <div className='bg-white shadow rounded p-4 p-md-5 w-100' style={{ maxWidth: '600px' }}>
        <h1 className='h4 mb-4 text-center text-dark'>Create a Post</h1>
        <form className='w-100 d-flex flex-column space-y-4'>
          {/* Post Title */}
          <div className='mb-3'>
            <input
              className='form-control py-3 px-4 rounded-lg'
              type='text'
              placeholder='Enter post title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* Post Description */}
          <div className='mb-3'>
            <textarea
              rows={8}
              className='form-control py-3 px-4 rounded-lg'
              placeholder='Enter post description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* File Upload */}
          <div className='mb-3'>
            <input
              className='form-control py-1'
              type='file'
            />
          </div>
          {/* Category Input and Add Button */}
          <div className='d-flex align-items-center mb-3'>
            <input
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className='form-control py-3 px-4 rounded-lg'
              placeholder='Enter post category'
              type='text'
            />
            </div>
            {/* Display Categories */}
          <div className='d-flex flex-wrap mb-3'>
            {cats.map((c, i) => (
              <div key={i} className='d-flex align-items-center bg-light rounded-pill px-3 py-2 me-3 mb-3'>
                <p className='text-dark mb-0 me-2'>{c}</p>
                <ImCross
                  onClick={() => deleteCategory(i)}
                  className='text-white bg-danger rounded-circle cursor-pointer p-1'
                  style={{ fontSize: '0.8rem' }}
                />
              </div>
            ))}
          </div>
            <div>
            <button
              onClick={addCategory}
              className='btn btn-primary py-2 rounded-lg'
              type='button'
            >
              Add Category
            </button>
          </div>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className='btn btn-primary w-100 mx-auto py-2 mt-3 rounded-lg'
            type='submit'
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
