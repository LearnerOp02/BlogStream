import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { toast } from 'react-toastify';

const EditPost = () => {
  const { id: postId } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('');
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/${postId}`);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setCats(res.data.categories);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, [postId]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = {
      title,
      description,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('img', filename);
      data.append('file', file);
      updatedPost.photo = filename;

      try {
        await axios.post('http://localhost:8000/api/upload', data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.put(`http://localhost:8000/api/${postId}`, updatedPost);
      toast.success("Blog updated successfully")
      window.location.replace(`/posts/post/${postId}`);
    } catch (err) {
      toast.error("Error while updating blog")
      console.log(err);
    }
  };

  return (
    <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: '#f0f2f5', padding: '20px' }}>
      <div className='bg-white shadow-lg rounded p-4 p-md-5 w-100' style={{ maxWidth: '600px', borderRadius: '15px' }}>
        <h1 className='h4 mb-4 text-center' style={{ fontWeight: 'bold' }}>Edit Your Blog</h1>
        <form className='w-100 d-flex flex-column' onSubmit={handleSubmit}>
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
          <div className='mb-3'>
            <input
              className='form-control py-1'
              type='file'
              onChange={(e) => setFile(e.target.files[0])}
              style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}
            />
          </div>
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
              className='btn btn-primary py-2 px-3 ml-2 rounded-lg'
              style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}
            >
              Add
            </button>
          </div>
          <div className='d-flex flex-wrap mb-3'>
            {cats.map((cat, index) => (
              <div key={index} className='d-flex align-items-center bg-light px-3 py-2 rounded-lg mr-2 mb-2' style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}>
                <span>{cat}</span>
                <ImCross
                  onClick={() => deleteCategory(index)}
                  className='ml-2 text-danger'
                  style={{ cursor: 'pointer', fontSize: '0.8rem' }}
                />
              </div>
            ))}
          </div>
          <button className='btn btn-primary py-3 px-4 rounded-lg mt-3' type='submit' style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}>
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
