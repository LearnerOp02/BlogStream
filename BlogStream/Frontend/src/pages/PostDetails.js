import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const PostDetails = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4 text-dark">Future of Coding</h1>
        <div className="d-flex align-items-center">
          <button className="btn btn-link text-secondary">
            <BiEdit size={24} />
          </button>
          <button className="btn btn-link text-secondary">
            <MdDelete size={24} />
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="text-muted">@pranitaher</p>
        <p className="text-muted">12-06-24</p>
      </div>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.YsEPA7fZ0516aowp79LtgQHaES&pid=Api&P=0&h=180"
        className="img-fluid mt-4 rounded shadow"
        alt="Post Cover"
      />
      <p className="mt-4 text-justify lead text-dark">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
      <div className="d-flex align-items-center mt-4">
        <p className="font-weight-bold ">Categories:</p>
        <div className="d-flex ml-2 mt-0">
          <span className="badge badge-secondary mr-2">Tech</span>
          <span className="badge badge-secondary">AI</span>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="h4 font-weight-bold mb-3">Comments</h2>
        {[1, 2].map((comment, index) => (
          <div key={index} className="p-3 bg-light rounded mb-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="h6 font-weight-bold text-dark">@pranitaher</h3>
              <div className="d-flex align-items-center">
                <p className="text-muted mt-3 mr-2">12-06-24</p>
                <button className="btn btn-link text-secondary">
                  <BiEdit size={16} />
                </button>
                <button className="btn btn-link text-secondary">
                  <MdDelete size={16} />
                </button>
              </div>
            </div>
            <p className="mt-0 text-dark">Nice info</p>
          </div>
        ))}
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mt-4 mb-4">
          <input
            className="form-control mr-md-2 mb-2 mb-md-0"
            type="text"
            placeholder="Write a comment"
          />
          <button type="button" class="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
