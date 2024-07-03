import React from 'react';
import ProfilePost from '../components/ProfilePost';

const Profile = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column flex-md-row overflow-auto">
      {/* Posts Section */}
      <div className="d-flex flex-column flex-grow-1 p-4 bg-light">
        <h1 className="display-4 mb-4">Your Posts</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Example ProfilePost components */}
          <ProfilePost />
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="d-flex flex-column flex-grow-1 p-4 bg-light">
        <h1 className="display-4 mb-4">Profile</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              className="form-control"
              placeholder="Enter username"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              className="form-control"
              placeholder="Enter email"
              type="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              className="form-control"
              placeholder="Enter password"
              type="password"
            />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2 mb-3" type="submit">
              Update
            </button>
            <button className="btn btn-danger mb-3" type="button">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
