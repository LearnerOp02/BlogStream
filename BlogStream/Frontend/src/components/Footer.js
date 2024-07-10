import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4" style={{ backgroundColor: '#343a40', borderTop: '5px solid #ffc107' }}>
      <div className="container">
        <div className="row">
          {/* Small Introduction */}
          <div className="col-md-4 mb-3">
            <h5 style={{ fontWeight: 'bold', borderBottom: '2px solid #ffc107', paddingBottom: '10px' }}>Blog's Space</h5>
            <p style={{ fontSize: '14px', lineHeight: '1.8' }}>
              Welcome to our blog site! We share interesting articles on a variety of topics. Stay tuned for the latest news.
            </p>
          </div>
          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 style={{ fontWeight: 'bold', borderBottom: '2px solid #ffc107', paddingBottom: '10px' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffc107'} onMouseOut={(e) => e.target.style.color = 'white'}>Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/aboutus" style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffc107'} onMouseOut={(e) => e.target.style.color = 'white'}>About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contactus" style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffc107'} onMouseOut={(e) => e.target.style.color = 'white'}>Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/blogs" style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffc107'} onMouseOut={(e) => e.target.style.color = 'white'}>Blogs</Link>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 style={{ fontWeight: 'bold', borderBottom: '2px solid #ffc107', paddingBottom: '10px' }}>Contact Us</h5>
            <p style={{ fontSize: '14px', lineHeight: '1.8' }}>
              Email: <a href="mailto:info@blogspace.com" style={{ color: '#ffc107', textDecoration: 'none' }}>blogstream@gmail.com</a>
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8' }}>
              Phone: <a href="tel:+1234567890" style={{ color: '#ffc107', textDecoration: 'none' }}>+123 456 7890</a>
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p style={{ fontSize: '14px' }}>
              &copy; {new Date().getFullYear()} Blog's Space. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
