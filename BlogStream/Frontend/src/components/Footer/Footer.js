import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer bg-dark text-white pt-4 pb-2">
            <div className="container">
                <div className="row">
                    {/* Small Introduction */}
                    <div className="col-md-4">
                        <h5>Blog's Space</h5>
                        <p>
                            Welcome to our blog site! We share interesting articles on a variety of topics. Stay tuned for the latest news.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="text-white"><Link to="/">Home</Link></li>
                            <li className="text-white"><Link to="/aboutus">About Us</Link></li>
                            <li className="text-white"><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    {/* Copyright Section */}
                    <div className="col-md-4 text-md-right">
                        <p className="mt-2">
                            &copy; {new Date().getFullYear()} Blog's Space. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
