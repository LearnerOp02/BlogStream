import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="container text-center my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow border-0 rounded-3">
            <div className="card-body p-4">
              <h1 className="display-1 fw-bold text-danger">404</h1>
              <h2 className="my-3">Oops! Page Not Found</h2>
              <p className="text-muted mb-4">The page you are looking for does not exist. It might have been moved or deleted.</p>
              <button 
                onClick={goToHome} 
                className="btn btn-primary rounded-pill px-4 py-2"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
