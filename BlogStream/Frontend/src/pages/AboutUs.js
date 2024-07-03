import React from 'react';
import Aboutus from '../Images/Aboutus.jpg';

const AboutUs = () => {
  return (
    <div className="container my-0">
      <div className="row mt-4">
        
        <div className="col-md-6 mb-4">
          <h2 className="h3">Our Mission</h2>
          <p>
            Our objective is to provide our readers with interesting, engaging, and useful material.
            We aspire to be a reliable source of knowledge, inspiration, and support for our community.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h2 className="h3">Our Vision</h2>
          <p>
            Our mission is to foster a thriving online community where individuals can interact, share ideas, and learn from one another. We want to create a community that values knowledge, creativity, and innovation.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 mb-4">
          <h2 className="h3">Contact Us</h2>
          <address>
            <strong>Email:</strong> <a href="mailto:info@blogsite.com">info@blogsite.com</a><br />
            <strong>Phone:</strong> (123) 456-7890<br />
            <strong>Address:</strong> 123 Blogging Lane, Blogtown, BL 45678
          </address>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <blockquote className="blockquote">
            <p className="mb-0">"The best way to predict the future is to create it."</p>
            <footer className="blockquote-footer">Peter Drucker</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
