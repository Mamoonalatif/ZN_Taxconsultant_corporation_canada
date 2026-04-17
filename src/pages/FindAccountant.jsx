import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../assets/images/white-bg.jpg';

const FindAccountant = () => {
    const [location, setLocation] = useState('All Offices');

    return (
        <div className="find-accountant-page">
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
                    <h1 style={{ fontWeight: '400', fontSize: '42px', color: '#000' }}>
                        <strong style={{ color: 'black' }}>Find an Accountant</strong> <span style={{ color: '#333' }}>for Your Small Business or Nonprofit</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: '#222', marginBottom: '30px' }}>
                        ZN Tax and Accounting Services is Here to Help You Search for a CPA or Other Accountant Who Perfectly Suits Your Business's Needs
                    </p>
                    <div className="wp-block-buttons">
                        <div className="wp-block-button">
                            <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ backgroundColor: '#FF8C42', color: '#fff', padding: '12px 30px', borderRadius: '50px', fontWeight: '700' }}>
                                Schedule An Accounting Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* CONTENT SECTION */}
            <div className="find-accountant-content alignfull">
                <div className="container">
                    <h2>ZN Tax and Accounting Services is Ready to Help You <strong>Find an Accountant</strong></h2>
                    <div className="find-accountant-text">
                        <p>
                           If you own a small or medium-sized business or nonprofit in the Markham, Ontario area and you need an accountant for <Link to="/tax">tax preparation/planning</Link> , business/financial consulting, <Link to="/quickbooks">QuickBooks® services</Link>, or <Link to="/bookkeeping">bookkeeping</Link>, look no further.
 <Link to="/tax">tax preparation/planning</Link>,
   </p>
                        <p>
                            Your search for 'find an accountant near me' or 'CPA near me' is over. ZN Tax and Accounting Services Professional Corporation has the professionals you're searching for in Markham, Ontario. Find a CPA here
                          </p>
                    </div>

                    <div className="notice-box">
                        <p>
                            <strong>Need a bookkeeper?</strong> We have fractional bookkeepers ready to help your business. <Link to="/bookkeeping">Search here</Link> for bookkeepers and other professionals.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FindAccountant;

