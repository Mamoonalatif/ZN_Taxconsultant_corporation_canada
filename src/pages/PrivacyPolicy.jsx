import React from 'react';
import whiteBg from '../assets/images/white-bg.jpg';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-page">
            <div className="wp-block-cover alignfull is-light" style={{
                minHeight: '200px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '40px',
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
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ fontSize: '36px', fontWeight: '300' }}>Privacy <strong>Policy</strong></h1>
                </div>
            </div>

            <div className="section-padding bg-white">
                <div className="container" style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>
                    <p style={{ marginBottom: '20px' }}>
                        At ZN Tax and Accounting Services, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
                    </p>
                    <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Information We Collect</h2>
                    <p style={{ marginBottom: '20px' }}>
                        We collect information you provide directly to us, such as when you fill out a contact form, sign up for our newsletter, or engage our services. This may include your name, email address, phone number, and financial information.
                    </p>
                    <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>How We Use Your Information</h2>
                    <p style={{ marginBottom: '20px' }}>
                        We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations. We do not sell or share your personal information with third parties for marketing purposes.
                    </p>
                    <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Data Security</h2>
                    <p style={{ marginBottom: '20px' }}>
                        We implement appropriate security measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.
                    </p>
                    <p style={{ marginTop: '40px', fontStyle: 'italic' }}>
                        Last Updated: January 2025
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
