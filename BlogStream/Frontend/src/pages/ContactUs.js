import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='container py-5'>
      {/* Contact Us Header */}
      <div className='row text-center mb-5'>
        <div className='col-md-12'>
          <h1 className='display-4 mb-4' style={{ fontWeight: 'bold', color: '#1d4ed8', fontFamily: 'Georgia, serif' }}>
            Get in Touch
          </h1>
          <p className='lead mb-4' style={{ color: '#4b5563', fontSize: '1.2rem', lineHeight: '1.7' }}>
            We would love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out to us.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className='row text-center mb-5'>
        <div className='col-md-4'>
          <div className='d-flex flex-column align-items-center'>
            <FaPhone size={50} className='text-primary mb-3' />
            <h3 className='h5 mb-2' style={{ color: '#1d4ed8' }}>Phone</h3>
            <p className='text-muted' style={{ fontSize: '1rem' }}>+1 234 567 890</p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='d-flex flex-column align-items-center'>
            <FaEnvelope size={50} className='text-primary mb-3' />
            <h3 className='h5 mb-2' style={{ color: '#1d4ed8' }}>Email</h3>
            <p className='text-muted' style={{ fontSize: '1rem' }}>blogstream@gmail.com</p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='d-flex flex-column align-items-center'>
            <FaMapMarkerAlt size={50} className='text-primary mb-3' />
            <h3 className='h5 mb-2' style={{ color: '#1d4ed8' }}>Address</h3>
            <p className='text-muted' style={{ fontSize: '1rem' }}>123 Blog Street, Suite 456, Tech City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
