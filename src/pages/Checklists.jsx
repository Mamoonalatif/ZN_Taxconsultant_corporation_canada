import React from 'react';
import whiteBg from '../assets/images/white-bg.jpg';

const Checklists = () => {
    const listItems = [
        "Year-End Tax Preparation Checklist",
        "New Business Startup Essentials",
        "Monthly Bookkeeping Review List",
        "Succession Planning Readiness",
        "Internal Controls Assessment"
    ];

    return (
        <div className="resources-page checklist-page">
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
                    <h1 style={{ fontSize: '40px', fontWeight: '300' }}>Essential <strong>Checklists</strong></h1>
                    <p style={{ fontSize: '20px', color: '#555', marginTop: '15px' }}>Stay Organized with ZN Tax and Accounting Services</p>
                </div>
            </div>

            {/* SECTION: Checklist List */}
            <div className="section-padding bg-white">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {listItems.map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '25px',
                                background: '#fff',
                                border: '1px solid #eee',
                                borderRadius: '4px',
                                marginBottom: '15px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ color: '#FF8C42', fontSize: '24px' }}>
                                        <i className="fa-solid fa-square-check"></i>
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{item}</h3>
                                </div>
                                <button style={{
                                    background: 'transparent',
                                    color: '#FF8C42',
                                    border: '2px solid #FF8C42',
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    fontWeight: '700',
                                    cursor: 'pointer'
                                }}>
                                    View Checklist
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checklists;

