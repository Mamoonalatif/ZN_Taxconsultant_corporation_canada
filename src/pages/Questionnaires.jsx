import React from 'react';
import whiteBg from '../assets/images/white-bg.jpg';

const Questionnaires = () => {
    const forms = [
        { title: "Individual Tax Organizer", time: "15-20 Min" },
        { title: "Business Intake Form", time: "10-15 Min" },
        { title: "New Client Onboarding", time: "5-10 Min" },
        { title: "Entity Selection Worksheet", time: "20-30 Min" }
    ];

    return (
        <div className="resources-page questionnaire-page">
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
                    <h1 style={{ fontSize: '40px', fontWeight: '300' }}>Client <strong>Questionnaires</strong></h1>
                    <p style={{ fontSize: '20px', color: '#555', marginTop: '15px' }}>Help Us Understand Your Needs Better</p>
                </div>
            </div>

            {/* SECTION: Form Grid */}
            <div className="section-padding bg-white">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                        {forms.map((form, i) => (
                            <div key={i} style={{
                                padding: '40px',
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                background: '#f8f9fa',
                                transition: 'all 0.3s ease',
                                hover: { transform: 'translateY(-5px)' }
                            }}>
                                <div style={{ fontSize: '14px', color: '#FF8C42', fontWeight: '700', marginBottom: '15px', textTransform: 'uppercase' }}>
                                    Estimated Time: {form.time}
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1F2937', marginBottom: '20px' }}>{form.title}</h3>
                                <p style={{ fontSize: '15px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
                                    Complete this digital form to provide our team with the necessary information to serve you effectively.
                                </p>
                                <button style={{
                                    background: '#1F2937',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '12px 30px',
                                    borderRadius: '4px',
                                    fontWeight: '700',
                                    cursor: 'pointer'
                                }}>
                                    Start Form
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questionnaires;


