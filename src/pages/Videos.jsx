import React from 'react';
import whiteBg from '../assets/images/white-bg.jpg';

const Videos = () => {
    const videos = [
        { title: "Introduction to ZN Tax and Accounting Services", duration: "2:45" },
        { title: "QuickBooks® Tips for Small Businesses", duration: "5:12" },
        { title: "Preparing for Your Tax Consultation", duration: "3:30" }
    ];

    return (
        <div className="resources-page video-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light" style={{
                minHeight: '250px',
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
                    <h1 style={{ fontSize: '40px', fontWeight: '300' }}>Educational <strong>Videos</strong></h1>
                    <p style={{ fontSize: '20px', color: '#555', marginTop: '15px' }}>Learn from the Experts at ZN Tax and Accounting Services</p>
                </div>
            </div>

            {/* SECTION: Video Grid */}
            <div className="section-padding bg-white">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                        {videos.map((vid, i) => (
                            <div key={i} style={{ cursor: 'pointer' }}>
                                <div style={{
                                    height: '200px',
                                    background: '#000',
                                    borderRadius: '8px',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ color: '#fff', fontSize: '50px', zIndex: 2 }}>
                                        <i className="fa-solid fa-circle-play"></i>
                                    </div>
                                    <div style={{ position: 'absolute', bottom: '15px', right: '15px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '3px 8px', fontSize: '11px', borderRadius: '3px', zIndex: 2 }}>
                                        {vid.duration}
                                    </div>
                                    {/* Placeholder overlay */}
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, #1F2937, #000)', opacity: 0.6 }}></div>
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#333', marginTop: '20px', lineHeight: '1.4' }}>{vid.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;

