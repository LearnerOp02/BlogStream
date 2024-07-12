import React from 'react';
import { FaHandsHelping, FaLightbulb, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='container py-5' style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      {/* About Us Introduction */}
      <div className='row justify-content-center text-center mb-5'>
        <div className='col-md-10 col-lg-8'>
          <h1 className='display-3 mb-4' style={{ fontWeight: 'bold', color: '#2d3748', fontFamily: 'Verdana, sans-serif' }}>
            About Us
          </h1>
          <p className='lead mb-4' style={{ color: '#4a5568', fontSize: '1.2rem', lineHeight: '1.7' }}>
            Welcome to Blog Stream! We are a vibrant team of writers and creators passionate about delivering fresh, engaging content. From the latest tech trends to personal growth and current events, we bring you insightful articles that spark thought and conversation.
          </p>
          <p className='text-muted mb-5' style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Our mission is to foster a community of learning and sharing. Join us on this exciting journey as we explore new ideas and provide valuable resources for our readers.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className='row text-center mb-5'>
        <div className='col-md-12'>
          <h2 className='display-4 mb-4' style={{ fontWeight: 'bold', color: '#2b6cb0' }}>Our Mission</h2>
          <p className='lead' style={{ color: '#4a5568', fontSize: '1.15rem', lineHeight: '1.7' }}>
            At Blog Stream, we aim to create high-quality content that informs, entertains, and inspires. We are committed to being a platform where diverse voices converge to share their passions and knowledge, encouraging growth and learning.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className='row text-center mb-5'>
        <div className='col-md-12'>
          <h2 className='display-4 mb-4' style={{ fontWeight: 'bold', color: '#2b6cb0' }}>Our Story</h2>
          <p className='lead' style={{ color: '#4a5568', fontSize: '1.15rem', lineHeight: '1.7' }}>
            Our journey began in 2020, driven by a shared passion for writing and storytelling. What started as a simple project has blossomed into a thriving community of writers and readers. We are excited to continue growing and sharing our experiences.
          </p>
          <p className='text-muted mb-4' style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            From humble beginnings to a platform with a global reach, Blog Stream is a testament to the power of collaboration and creativity.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className='row text-center mb-5'>
        <div className='col-md-12'>
          <h2 className='display-4 mb-4' style={{ fontWeight: 'bold', color: '#2b6cb0' }}>Our Values</h2>
          <div className='d-flex flex-column flex-md-row justify-content-center'>
            <div className='m-3 p-5 bg-white shadow-lg rounded-lg' style={{ maxWidth: '320px' }}>
              <FaHandsHelping size={50} className='mb-3' style={{ color: '#f6ad55' }} />
              <h3 className='h5' style={{ fontWeight: 'bold', color: '#2b6cb0' }}>Integrity</h3>
              <p className='text-muted' style={{ fontSize: '1rem', lineHeight: '1.5' }}>We are committed to honesty and transparency, delivering content that is reliable and trustworthy.</p>
            </div>
            <div className='m-3 p-5 bg-white shadow-lg rounded-lg' style={{ maxWidth: '320px' }}>
              <FaLightbulb size={50} className='mb-3' style={{ color: '#38b2ac' }} />
              <h3 className='h5' style={{ fontWeight: 'bold', color: '#2b6cb0' }}>Creativity</h3>
              <p className='text-muted' style={{ fontSize: '1rem', lineHeight: '1.5' }}>We embrace innovative ideas and encourage creative expression in every aspect of our content.</p>
            </div>
            <div className='m-3 p-5 bg-white shadow-lg rounded-lg' style={{ maxWidth: '320px' }}>
              <FaUsers size={50} className='mb-3' style={{ color: '#edf2f7' }} />
              <h3 className='h5' style={{ fontWeight: 'bold', color: '#2b6cb0' }}>Community</h3>
              <p className='text-muted' style={{ fontSize: '1rem', lineHeight: '1.5' }}>We build a welcoming space for readers and writers to connect, share, and grow together.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='row text-center mb-5'>
        <div className='col-md-12'>
          <h2 className='display-4 mb-4' style={{ fontWeight: 'bold', color: '#2b6cb0' }}>Join Us</h2>
          <p className='lead mb-4' style={{ color: '#4a5568', fontSize: '1.15rem', lineHeight: '1.7' }}>
            Passionate about writing or eager to make your voice heard? We are always looking for new contributors to join our team. Get in touch if you’re interested in being a part of Blog Stream!
          </p>
          <Link
            to='/contactus'
            className='btn btn-primary btn-lg'
            style={{ backgroundColor: '#2b6cb0', borderColor: '#2b6cb0', padding: '12px 24px', fontSize: '1.2rem', borderRadius: '30px' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
