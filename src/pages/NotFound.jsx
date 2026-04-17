import React from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../assets/images/white-bg.jpg';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className="wp-block-cover alignfull is-light" style={{
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '40px',
                background: `#f5f7f8`,
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div
                    className="wp-block-cover__image-background"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.3
                    }}
                ></div>
                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <h1 style={{ fontSize: '80px', fontWeight: '700', color: '#1F2937', marginBottom: '20px' }}>404</h1>
                    <h2 style={{ fontSize: '32px', fontWeight: '300', color: '#333', marginBottom: '30px' }}>Oops! The page you're looking for <strong>doesn't exist.</strong></h2>
                    <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
                        It looks like the link might be broken or the page has been moved.
                    </p>
                    <div className="wp-block-buttons" style={{ justifyContent: 'center' }}>
                        <Link className="wp-block-button__link wp-element-button" to="/" style={{ background: '#FF8C42', padding: '15px 40px' }}>
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;


