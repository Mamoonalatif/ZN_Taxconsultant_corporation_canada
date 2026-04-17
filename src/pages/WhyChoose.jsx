import React from 'react';
import whiteBg from '../assets/images/white-bg.jpg';

const WhyChoose = () => {
    const pillars = [
        {
            title: 'TAILORED FINANCIAL ARCHITECTURES',
            desc: "We construct personalized financial frameworks suited to your specific business landscape. Our services are like finely tuned instruments, crafted to harmonize with your company's rhythm.",
            icon: 'fa-file-invoice-dollar'
        },
        {
            title: 'SUSTAINABLE GROWTH PLANNING',
            desc: "Our financial planning isn't just about the present; it's about paving a path for sustainable growth. Zen Tax strategic planning services help you forecast future scenarios, prepare for potential challenges, and capitalize on opportunities for expansion.",
            icon: 'fa-chart-line'
        },
        {
            title: 'DEDICATED ADVISORY PARTNERSHIP',
            desc: "Zn Tax believes in building a partnership that goes beyond the numbers. Our team becomes an extension of yours, offering dedicated support, advice, and financial mentorship. We invest in your success as if it were our own.",
            icon: 'fa-handshake'
        }
    ];

    return (
        <div className="why-choose-page" style={{ backgroundColor: '#ffffff' }}>
            <div className="wp-block-cover alignfull is-light careers-hero" style={{
                minHeight: '320px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '50px',
                background: '#f5f7f8',
                position: 'relative'
            }}>
                <div
                    className="wp-block-cover__image-background"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.38), rgba(0,0,0,0.38)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.3
                    }}
                ></div>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="why-choose-title" style={{
                        color: '#000',
                        textAlign: 'left',
                        fontSize: '46px',
                        lineHeight: '1.15',
                        margin: '0',
                        fontWeight: '300'
                    }}>
                        Why Choose <strong>ZN Tax and Accounting Services?</strong>
                    </h1>
                </div>
            </div>

            <div className="section-padding" style={{ background: '#ffffff', padding: '70px 0 70px' }}>
                <div className="container" style={{ maxWidth: '1250px' }}>
                    <div
                        className="why-choose-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                            gap: '30px'
                        }}
                    >
                        {pillars.map((item, i) => (
                            <article
                                key={i}
                                className="why-choose-card"
                                style={{
                                    color: '#1f2937',
                                    background: '#f8fafc',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '14px',
                                    padding: '24px 22px 20px',
                                    boxShadow: '0 10px 24px rgba(15,25,37,0.08)',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                                    <div
                                        style={{
                                            width: '54px',
                                            height: '54px',
                                            minWidth: '54px',
                                            borderRadius: '50%',
                                            border: '1px solid rgba(255, 140, 66, 0.6)',
                                            background: 'rgba(255, 140, 66, 0.12)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <i className={`fa-solid ${item.icon}`} style={{ color: '#FF8C42', fontSize: '22px' }}></i>
                                    </div>

                                    <h2
                                        className="why-choose-card-title"
                                        style={{
                                            margin: '0',
                                            color: '#111827',
                                            fontSize: '16px',
                                            fontWeight: '800',
                                            lineHeight: '1.2',
                                            letterSpacing: '0.3px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.title}
                                    </h2>
                                </div>

                                <p
                                    className="why-choose-card-desc"
                                    style={{
                                        margin: '18px 0 0',
                                        color: '#4b5563',
                                        fontSize: '13px',
                                        lineHeight: '1.7',
                                        fontWeight: '500'
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .why-choose-title {
                        font-size: 34px !important;
                    }

                    .why-choose-card-title {
                        font-size: 15px !important;
                    }

                    .why-choose-card-desc {
                        font-size: 13px !important;
                    }
                }

                @media (max-width: 900px) {
                    .why-choose-grid {
                        grid-template-columns: 1fr !important;
                        gap: 28px !important;
                    }

                    .why-choose-card {
                        padding: 18px 16px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default WhyChoose;
