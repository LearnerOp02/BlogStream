import React from 'react';
import HomePost from '../components/HomePost';

const Blogs = () => {
  return (
    <div className='container-fluid py-4'>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center'>
        <HomePost />
        <HomePost />
      </div>
    </div>
  );
};

export default Blogs;
