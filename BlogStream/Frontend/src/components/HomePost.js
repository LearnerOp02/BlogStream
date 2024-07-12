import React from 'react';
import { IF } from '../pages/url'; // Ensure IF is correctly imported

const HomePost = ({ post }) => {
  return (
    <div className='col'>
      <div className='card h-100'>
        <img src={IF + post.photo} className='card-img-top' alt={post.title} />
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5>
          <p className='card-text'>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePost;
