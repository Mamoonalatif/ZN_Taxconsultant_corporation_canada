import React from 'react';
import { Link } from 'react-router-dom';
import GoogleReviews from '../components/GoogleReviews';

// Import images/assets
import logoImg from '../assets/images/logo.png';
import whiteBg from '../assets/images/white-bg.jpg';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* HERO SECTION */}
            <div className="contact-hero alignfull">
                <div
                    className="wp-block-cover__image-background has-parallax"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.3
                    }}
                ></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontWeight: '500' }}>Contact <strong style={{ color: '#000' }}>ZN Tax and Accounting Services</strong></h1>
                    <p style={{ fontWeight: '500' }}>Have a Question? Need Help Finding an Accountant or Bookkeeper?</p>
                </div>
            </div>

            {/* MAIN CONTENT SECTION */}
            <div className="contact-main-section">
                <div className="container">
                    <div className="contact-flex">
                        {/* LEFT: FORM */}
                        <div className="contact-form-side">
                            <h2>Contact Us Below and We'll Be in Touch as Soon as We're Able</h2>
                            <form className="contact-form">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Name <span>(Required)</span></label>
                                        <input type="text" placeholder="" />
                                        <span className="form-sub-label">First</span>
                                    </div>
                                    <div className="form-group" style={{ paddingTop: '28px' }}>
                                        <input type="text" placeholder="" />
                                        <span className="form-sub-label">Last</span>
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Company Name</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="tel" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email <span>(Required)</span></label>
                                        <input type="email" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Questions/Comments</label>
                                        <textarea></textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Sign Up for Insights!</label>
                                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                                        Stay informed with expert tips, practical insights & more delivered right to your inbox.
                                    </p>
                                    <div style={{ display: 'flex', gap: '20px', fontSize: '13px' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '400' }}>
                                            <input type="radio" name="subscribe" value="yes" /> Yes
                                        </label>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '400' }}>
                                            <input type="radio" name="subscribe" value="no" /> No
                                        </label>
                                    </div>
                                </div>

                                <div className="captcha-placeholder">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '24px', height: '24px', border: '2px solid #c1c1c1', borderRadius: '2px', backgroundColor: '#fff' }}></div>
                                        <span style={{ fontSize: '14px', color: '#000', fontFamily: 'Roboto, helvetica, arial, sans-serif' }}>I'm not a robot</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                                        <img
                                            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                                            alt="reCAPTCHA"
                                            style={{ width: '32px', height: '32px' }}
                                        />
                                        <div style={{ fontSize: '8px', color: '#555', textAlign: 'center', lineHeight: '1' }}>
                                            reCAPTCHA<br />
                                            <span style={{ fontSize: '7px' }}>Privacy - Terms</span>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>Submit</button>
                            </form>
                        </div>

                        {/* RIGHT: SIDEBAR */}
                        <aside className="contact-sidebar">
                            <img src={logoImg} alt="ZN Tax and Accounting Services Logo" className="sidebar-logo" />

                            <div style={{ fontSize: '14px', color: '#4b5563', margin: '8px 0 0', lineHeight: '1.7' }}>
                                <strong style={{ color: '#111827' }}>Our Office</strong><br />
                                1940 Bur Oak Avenue,<br />
                                Markham, Ontario,<br />
                                L6E 1W9
                            </div>

                            <hr className="sidebar-divider" />

                            <h3 className="sidebar-title">Follow Us On Social</h3>
                            <div className="sidebar-social-icons">
                                <Link to="/coming-soon"><i className="fa-brands fa-facebook"></i></Link>
                                <Link to="/coming-soon"><i className="fa-brands fa-linkedin"></i></Link>
                                <Link to="/coming-soon"><i className="fa-brands fa-youtube"></i></Link>
                            </div>

                            <hr className="sidebar-divider" />

                            <h3 className="sidebar-title">Want to Schedule a Consultation?</h3>
                            <Link to="/schedule" className="sidebar-btn">Schedule Now</Link>

                            <hr className="sidebar-divider" />

                            <h3 className="sidebar-title">Subscribe to Our Blogs</h3>
                            <p style={{ fontSize: '12px', color: '#777', fontStyle: 'italic', marginBottom: '15px' }}>No spam, only sound advice.</p>
                            <Link to="/blogs" className="sidebar-link">Sign Up Today!</Link>
                        </aside>
                    </div>
                </div>
            </div>



            {/* REVIEWS SECTION */}
            <GoogleReviews />
        </div>
    );
};

export default Contact;
