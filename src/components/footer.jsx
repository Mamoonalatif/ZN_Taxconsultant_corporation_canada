import React, { useState } from 'react';
import logoWithoutBg from '../assets/images/logo2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [expandedMenu, setExpandedMenu] = useState(null);

    const handleSocialClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/coming-soon') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/coming-soon');
        }
    };

    const toggleDropdown = (menuName) => {
        setExpandedMenu(expandedMenu === menuName ? null : menuName);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log('Newsletter signup:', { email, firstName });
        // Add your newsletter signup logic here
    };

    return (
        <>
            <footer id="footer-wrapper">
                <div id="footer" className="container">
                    <div className="footer-columns">
                        {/* Column 1: Logo, Info & Socials */}
                        <div className="footer-col-1">
                            <div id="footer-logo">
                                <a href="/">
                                    <img src={logoWithoutBg} alt="ZN Tax and Accounting Services logo" width="180" height="auto" />
                                </a>
                            </div>
                            <p className="footer-description">
                                ZN Tax and Accounting Services offers expert coaching to small businesses throughout Central PA, providing guidance and advice on how to address the day-to-day challenges of business operations and to develop plans for reaching big-picture, long-term goals and objectives.
                            </p>

                            <div className="footer-contact-info">
                                <div className="contact-item">
                                    <i className="fa-solid fa-phone"></i>
                                    <a href="tel:+16479377074">647-937-7074</a>
                                </div>
                                <div className="contact-item">
                                    <i className="fa-solid fa-envelope"></i>
                                    <Link to="/contact">Email Us</Link>
                                </div>
                                <div className="contact-item">
                                    <i className="fa-solid fa-calendar-days"></i>
                                    <Link to="/schedule">Schedule a Consultation</Link>
                                </div>
                            </div>

                            <ul className="social-icons">
                                <li><a href="#" onClick={handleSocialClick}><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" onClick={handleSocialClick}><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#" onClick={handleSocialClick}><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>

                        {/* Column 2: Company */}
                        <div className="footer-col-2">
                            <button 
                                className={`footer-heading footer-dropdown-btn ${expandedMenu === 'company' ? 'expanded' : ''}`}
                                onClick={() => toggleDropdown('company')}
                            >
                                Company
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <ul className={`footer-menu ${expandedMenu === 'company' ? 'show' : ''}`}>
                                <li><Link to="/why-choose-zn">Why Choose Us</Link></li>
                                <li><Link to="/our-people">Our People</Link></li>
                                <li><Link to="/testimonials">Testimonials</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Accounting Services */}
                        <div className="footer-col-3">
                            <button 
                                className={`footer-heading footer-dropdown-btn ${expandedMenu === 'accounting' ? 'expanded' : ''}`}
                                onClick={() => toggleDropdown('accounting')}
                            >
                                Accounting Services
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <ul className={`footer-menu footer-menu-underlined ${expandedMenu === 'accounting' ? 'show' : ''}`}>
                                <li><Link to="/bookkeeping">Bookkeeping</Link></li>
                                <li><Link to="/tax">Tax Prep & Planning</Link></li>
                                <li><Link to="/acquisitions">Acquisitions & Startups</Link></li>
                                <li><Link to="/consulting">Business & Financial Consulting</Link></li>
                                <li><Link to="/valuations">Business Valuations</Link></li>
                                <li><Link to="/quickbooks">QuickBooks®</Link></li>
                            </ul>
                        </div>

                        {/* Column 3b: Small Screen Quick Links */}
                        <div className="footer-col-3b">
                            <ul className="footer-menu footer-menu-quick">
                                <li><Link to="/find-accountant">Find an Accountant</Link></li>
                                <li><Link to="/our-people">Our People</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Newsletter Signup */}
                        <div className="footer-col-4" style={{ flexBasis: '35%', minWidth: '320px' }}>
                            <div className="newsletter-signup">
                                <h3 className="newsletter-heading">Get Updates</h3>
                                <p className="newsletter-description">
                                    Stay informed with expert tips & practical insights delivered to your inbox.
                                </p>

                                <form onSubmit={handleSubmit} className="newsletter-form">
                                    <div className="form-group">
                                        <label htmlFor="newsletter-email"><span style={{ color: '#FF8C42', fontWeight: 'bold' }}>*</span> Email</label>
                                        <input
                                            type="email"
                                            id="newsletter-email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="newsletter-firstname"><span style={{ color: '#FF8C42', fontWeight: 'bold' }}>*</span> First Name</label>
                                        <input
                                            type="text"
                                            id="newsletter-firstname"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <p className="newsletter-disclaimer">
                                        By submitting this form, you are consenting to receive marketing emails from ZN Tax and Accounting Services. You can revoke your consent to receive emails at any time by using the SafeUnsubscribe® link, found at the bottom of every email. <Link to="/privacy-policy">View our Privacy Policy.</Link>
                                    </p>

                                    <button type="submit" className="newsletter-submit">Sign Up!</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer Links */}
                    <div className="footer-bottom-links">
                        <ul className="copyright-menu">
                            <li><Link to="/why-choose-zn">Why Choose ZN Tax and Accounting Services</Link></li>
                            <li><Link to="/find-accountant">Find an Accountant</Link></li>
                            <li><Link to="/our-people">Our People</Link></li>
                            <li><Link to="/our-process">Our Process</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div id="copyright-wrapper">
                    <div id="copyright" className="container">
                        <div className="copyright-left">
                      
                            <span style={{ textAlign: "center" }}>©2025, ZN Tax and Accounting Services. All Rights Reserved. <Link to="/privacy-policy">Privacy Policy</Link></span>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
};

export default Footer;

