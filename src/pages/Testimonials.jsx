import React from 'react';
import whiteBg from '../assets/images/white-bg.jpg';
import GoogleReviews from '../components/GoogleReviews';

const Testimonials = () => {
    return (
        <div className="testimonials-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light" style={{
                minHeight: '300px',
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
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.2
                    }}
                ></div>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="wp-block-heading" style={{ fontSize: '40px', color: '#000', fontWeight: '300', lineHeight: '1.2' }}>
                        Client <strong>Testimonials</strong>
                    </h1>
                    <p style={{ fontSize: '22px', color: '#444', maxWidth: '900px', margin: '25px 0', lineHeight: '1.7', fontWeight: '400' }}>
                        Hear From the Businesses We've Helped Grow
                    </p>
                </div>
            </div>

            <GoogleReviews />
        </div>
    );
};

export default Testimonials;

