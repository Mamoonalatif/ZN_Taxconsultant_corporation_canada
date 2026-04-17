import React from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../assets/images/white-bg.jpg';

const ComingSoon = () => {
    return (
        <div className="coming-soon-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light" style={{
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '80px',
                paddingBottom: '80px',
                background: `#f5f7f8`,
                position: 'relative'
            }}>
                <div
                    className="wp-block-cover__image-background"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.2
                    }}
                ></div>
                <div className="wp-block-cover__inner-container container text-center" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
                    <div className="coming-soon-icon" style={{
                        color: '#FF8C42',
                        marginBottom: '40px',
                        fontSize: '80px',
                        fontWeight: '300'
                    }}>
                        <i className="fas fa-clock"></i>
                    </div>
                    <h1 className="wp-block-heading coming-soon-title" style={{
                        color: '#000',
                        fontWeight: '300',
                        lineHeight: '1.2',
                        marginBottom: '25px'
                    }}>
                        <strong>Coming Soon!</strong>
                    </h1>
                    <p className="coming-soon-text" style={{
                        color: '#444',
                        maxWidth: '700px',
                        margin: '0 auto 40px',
                        lineHeight: '1.7',
                        fontWeight: '400'
                    }}>
                        We're working on something exciting! This page will be available soon. Stay tuned for updates.
                    </p>

                    <div className="wp-block-buttons" style={{
                        justifyContent: 'center',
                        gap: '15px',
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>
                        <div className="wp-block-button">
                            <Link
                                className="wp-block-button__link wp-element-button"
                                to="/"
                                style={{
                                    backgroundColor: '#FF8C42',
                                    color: '#fff',
                                    padding: '12px 35px',
                                    borderRadius: '50px',
                                    fontWeight: '700',
                                    fontSize: '15px',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                            >
                                <i className="fas fa-home" style={{ marginRight: '15px' }}></i>
                                Back to Home
                            </Link>
                        </div>
                        <div className="wp-block-button">
                            <Link
                                className="wp-block-button__link wp-element-button"
                                to="/contact"
                                style={{
                                    backgroundColor: '#1F2937',
                                    color: '#fff',
                                    padding: '12px 35px',
                                    borderRadius: '50px',
                                    fontWeight: '700',
                                    fontSize: '15px',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                            >
                                <i className="fas fa-envelope" style={{ marginRight: '15px' }}></i>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container text-center">
                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: '300',
                        marginBottom: '30px',
                        color: '#333'
                    }}>
                        In the meantime, explore our <strong>services</strong>
                    </h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        marginTop: '40px',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { name: 'Tax Preparation', icon: 'fa-file-invoice-dollar', link: '/tax' },
                            { name: 'Bookkeeping', icon: 'fa-book', link: '/bookkeeping' },
                            { name: 'QuickBooks', icon: 'fa-calculator', link: '/quickbooks' },
                            { name: 'Consulting', icon: 'fa-handshake', link: '/consulting' }
                        ].map((service, i) => (
                            <Link
                                key={i}
                                to={service.link}
                                style={{
                                    background: '#f8f8f8',
                                    padding: '40px 30px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    borderBottom: '4px solid #FF8C42',
                                    flex: '1 1 200px',
                                    maxWidth: '250px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{ fontSize: '48px', marginBottom: '20px', color: '#FF8C42' }}>
                                    <i className={`fa-solid ${service.icon}`}></i>
                                </div>
                                <h3 style={{ fontSize: '20px', margin: 0, color: '#333', fontWeight: '700' }}>
                                    {service.name}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;


