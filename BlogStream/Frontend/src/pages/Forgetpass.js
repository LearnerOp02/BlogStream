import React from 'react';

const Forgetpass = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg border-info rounded-lg">
            <div className="card-body">
              <h2 className="text-center mb-4" style={{ color: '#17a2b8', fontWeight: 'bold', fontFamily: 'Verdana, sans-serif' }}>Forgot Password</h2>
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label" style={{ fontSize: '1.1rem', fontWeight: '500', color: '#495057' }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your registered email"
                    required
                    style={{
                      borderColor: '#17a2b8',
                      borderRadius: '0.5rem',
                      padding: '0.75rem 1.25rem',
                      backgroundColor: '#f0f8ff'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-info btn-lg w-100"
                  style={{
                    backgroundColor: '#17a2b8',
                    borderColor: '#17a2b8',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold',
                    color: '#ffffff'
                  }}
                >
                  Reset Password
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              <p className="text-muted mb-0">
                Remember your password? <a href="/login" className="text-info">Log In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;
