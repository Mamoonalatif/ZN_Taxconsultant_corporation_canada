import React from 'react';
import whiteBg from '../assets/images/white-bg.jpg';

const Guides = () => {
    const guides = [
        { title: "SME Tax Compliance Guide", pages: "12 Pages", type: "PDF" },
        { title: "Nonprofit Financial Oversight", pages: "18 Pages", type: "PDF" },
        { title: "Business Expansion Roadmap", pages: "15 Pages", type: "PDF" }
    ];

    return (
        <div className="resources-page guides-page">
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
                    <h1 style={{ fontSize: '40px', fontWeight: '300' }}>Resource <strong>Guides</strong></h1>
                    <p style={{ fontSize: '20px', color: '#555', marginTop: '15px' }}>Comprehensive In-Depth Resources for Your Business</p>
                </div>
            </div>

            {/* SECTION: Guide Inventory */}
            <div className="section-padding bg-white">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
                        {guides.map((guide, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                background: '#fdfdfd',
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.03)'
                            }}>
                                <div style={{ width: '150px', background: '#1F2937', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                    <i className="fa-solid fa-file-pdf" style={{ fontSize: '60px' }}></i>
                                </div>
                                <div style={{ padding: '30px', flex: 1 }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#333', marginBottom: '10px' }}>{guide.title}</h3>
                                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>{guide.pages} • {guide.type}</div>
                                    <button style={{
                                        background: '#FF8C42',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '10px 25px',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        cursor: 'pointer'
                                    }}>
                                        Download Guide
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guides;


