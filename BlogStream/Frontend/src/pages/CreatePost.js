import React, { useState, useContext } from 'react';
import { ImCross } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const navigate = useNavigate();

  const deleteCategory = (i) => {
    setCats(cats.filter((_, index) => index !== i));
  };

  const addCategory = () => {
    setCats([...cats, cat]);
    setCat("");
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      description,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;

      try {
        await axios.post("http://localhost:8000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post("http://localhost:8000/api/create", post);
      navigate("/posts/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container-fluid min-vh-80 d-flex justify-content-center align-items-center bg-light mt-4 mb-4'>
      <div className='bg-white shadow rounded p-4 p-md-5 w-100' style={{ maxWidth: '600px' }}>
        <h1 className='h4 mb-4 text-center text-dark'>Create a Post</h1>
        <form className='w-100 d-flex flex-column space-y-4' onSubmit={handleCreate}>
          <div className='mb-3'>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className='form-control py-3 px-4 rounded-lg'
              type='text'
              placeholder='Enter post title'
              required
            />
          </div>
          <div className='mb-3'>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              rows={8}
              className='form-control py-3 px-4 rounded-lg'
              placeholder='Enter post description'
              required
            />
          </div>
          <div className='mb-3'>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              className='form-control py-1'
              type='file'
            />
          </div>
          <div className='d-flex align-items-center mb-3'>
            <input
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className='form-control py-3 px-4 rounded-lg'
              placeholder='Enter post category'
              type='text'
            />
            <button
              onClick={addCategory}
              className='btn btn-primary py-2 rounded-lg ms-2'
              type='button'
            >
              Add Category
            </button>
          </div>
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
          <button className='btn btn-primary w-100 mx-auto py-2 mt-3 rounded-lg' type='submit'>
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
