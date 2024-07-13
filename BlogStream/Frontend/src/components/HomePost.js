import React from 'react';
import { Link } from 'react-router-dom';
import {IF} from '../url'

const HomePost = ({ post }) => {
  return (
    <div className='card card-single shadow-lg mx-4 my-3 single-card blog-card p-3 flex-1' style={{ width: '350px', borderRadius: '15px', overflow: 'hidden', border: '1px solid #ccc' }}>
      <div className="img-container d-flex" style={{ maxHeight: '150px', minHeight: '150px' }}>
        <img src={IF+post.photo} alt="Blog Post" className="card-img-top" style={{ objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
      </div>
      <div className="card-body p-4">
        <p className="card-title text-dark title" style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>
          {post.title}
        </p>
        <div className="d-flex justify-content-between m-2">
          <p className="small text-muted">{new Date(post.updatedAt).toDateString()}</p>
        </div>
        <p className="card-text content py-1 mt-0 mb-4 pt-0 text-dark" style={{ minHeight: '70px', maxHeight: '70px', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {post.description}
        </p>
        <div className="links d-flex justify-content-between align-items-center m-0 p-1">
          <p className="small pb-0 pt-1 m-0 text-primary" style={{ fontWeight: "700" }}>@{post.username}</p>
          <Link to={`/posts/post/${post._id}`}>
            <span className="py-0 text-primary" style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '14px' }}>
              Read more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePost;
