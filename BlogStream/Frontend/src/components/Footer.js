import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4" style={{ borderTop: '5px solid #ffc107' }}>
      <div className="container">
        <div className="row">
          {/* Small Introduction */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase" style={{ borderBottom: '2px solid #ffc107', paddingBottom: '10px' }}>Blog Stream</h5>
            <p className="small" style={{ lineHeight: '1.8' }}>
              Welcome to our blog site! We share interesting articles on a variety of topics. Stay tuned for the latest news.
            </p>
          </div>
          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase" style={{ borderBottom: '2px solid #ffc107', paddingBottom: '10px' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffc107'} onMouseOut={(e) => e.target.style.color = 'white'}>Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/aboutus" className="text-white" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffc107'} onMouseOut={(e) => e.target.style.color = 'white'}>About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contactus" className="text-white" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffc107'} onMouseOut={(e) => e.target.style.color = 'white'}>Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/blogs" className="text-white" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffc107'} onMouseOut={(e) => e.target.style.color = 'white'}>Blogs</Link>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase" style={{ borderBottom: '2px solid #ffc107', paddingBottom: '10px' }}>Contact Us</h5>
            <p className="small" style={{ lineHeight: '1.8' }}>
              Email: <a href="mailto:blogstream@gmail.com" className="text-warning" style={{ textDecoration: 'none' }}>blogstream@gmail.com</a>
            </p>
            <p className="small" style={{ lineHeight: '1.8' }}>
              Phone: <a href="tel:+1234567890" className="text-warning" style={{ textDecoration: 'none' }}>+123 456 7890</a>
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} Blog Stream. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
