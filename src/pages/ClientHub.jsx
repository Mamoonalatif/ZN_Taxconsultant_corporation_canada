import React from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../assets/images/white-bg.jpg';
const shootImg = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop";
import careers1 from '../assets/images/Careers_1.jpg';
import careers2 from '../assets/images/Careers_2.jpg';
import writing from '../assets/images/writing.jpg';

const ClientHub = () => {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light" style={{
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '40px',
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
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="wp-block-heading" style={{ fontSize: '48px', color: '#000', fontWeight: '300', lineHeight: '1.2' }}>
                        Log In Here to <strong>Access the ZN Tax and Accounting Services Client Portal</strong>
                    </h1>
                    <p style={{ fontSize: '22px', color: '#444', maxWidth: '850px', margin: '25px 0', lineHeight: '1.7', fontWeight: '400' }}>
                        You are Invited to Experience Everything Being a ZN Tax and Accounting Services' Client has to Offer, Here in the Client Hub.
                    </p>
                </div>
            </div>

            {/* 2. LOGIN CTAs */}
            <div className="section-padding bg-white" style={{ padding: '40px 0' }}>
                <div className="container">
                    <div className="login-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        <div className="login-box bg-soft-red" style={{
                            background: '#f8f8f8',
                            padding: '60px 40px',
                            textAlign: 'center',
                            borderRadius: '8px',
                            borderBottom: '4px solid #FF8C42'
                        }}>
                            <p style={{ fontSize: '20px', marginBottom: '25px', color: '#333' }}><strong>Login to access the Client Portal:</strong></p>
                            <a href="#" target="_blank" rel="noreferrer noopener" className="btn-resource" style={{
                                background: '#FF8C42',
                                color: '#fff',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}>
                                <i className="fas fa-lock" style={{ marginRight: '10px' }}></i> Secure Login
                            </a>
                        </div>
                        <div className="login-box" style={{
                            background: '#f8f8f8',
                            padding: '60px 40px',
                            textAlign: 'center',
                            borderRadius: '8px',
                            borderBottom: '4px solid #1F2937'
                        }}>
                            <p style={{ fontSize: '20px', marginBottom: '25px', color: '#333' }}><strong>Online QuickBooks Login:</strong></p>
                            <a href="https://qbo.intuit.com" target="_blank" rel="noreferrer noopener" className="btn-resource" style={{
                                background: '#1F2937',
                                color: '#fff',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}>
                                <i className="fas fa-lock" style={{ marginRight: '10px' }}></i> QuickBooks Access
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. HELP NAVIGATION */}
            <div className="section-padding bg-light" style={{ padding: '40px 0' }}>
                <div className="container text-center">
                    <hr className="divider" style={{ opacity: 0.1, marginBottom: '40px', border: '0', borderTop: '1px solid #ddd' }} />
                    <h3 className="section-header" style={{ fontSize: '32px', fontWeight: '300', marginBottom: '50px' }}>How Can We <strong>Help You Today?</strong></h3>
                    <div className="help-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                        gap: '20px'
                    }}>
                        {[
                            { name: 'Getting Started', icon: 'fa-rocket' },
                            { name: 'Forms', icon: 'fa-file-lines' },
                            { name: 'Guides', icon: 'fa-book' },
                            { name: 'Questionnaires', icon: 'fa-clipboard-question' },
                            { name: 'News', icon: 'fa-newspaper' },
                            { name: 'Videos', icon: 'fa-video' }
                        ].map((item, i) => (
                            <a key={i} href={`#${item.name.toLowerCase().replace(' ', '-')}`} className="help-item" style={{
                                background: '#1F2937',
                                padding: '40px 20px',
                                borderRadius: '8px',
                                color: '#fff',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ fontSize: '40px', marginBottom: '15px' }}>
                                    <i className={`fa-solid ${item.icon}`}></i>
                                </div>
                                <h3 style={{ fontSize: '16px', margin: 0 }}>{item.name}</h3>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. GET STARTED SECTION */}
            <div id="getting-started" className="section-padding bg-white" style={{ padding: '40px 0' }}>
                <div className="container">
                    <h2 className="section-header" style={{ fontSize: '32px', fontWeight: '300', marginBottom: '40px' }}>Get <strong>Started</strong></h2>
                    <div className="wp-block-columns are-vertically-aligned-center" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #1F2937 0%, #2a6a8f 100%)',
                            padding: '60px 40px',
                            borderRadius: '12px',
                            color: '#fff',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                        }}>
                            <div style={{ fontSize: '64px', marginBottom: '20px', opacity: 0.9 }}>
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>Quick Start Guide</h3>
                            <ul style={{ fontSize: '16px', lineHeight: '2', listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px' }}>
                                    <i className="fas fa-check-circle" style={{ marginRight: '12px', color: '#4ade80' }}></i>
                                    Log in with your credentials
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <i className="fas fa-check-circle" style={{ marginRight: '12px', color: '#4ade80' }}></i>
                                    Upload documents securely
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <i className="fas fa-check-circle" style={{ marginRight: '12px', color: '#4ade80' }}></i>
                                    Access your tax returns
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <i className="fas fa-check-circle" style={{ marginRight: '12px', color: '#4ade80' }}></i>
                                    Communicate with our team
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" style={{ marginRight: '12px', color: '#4ade80' }}></i>
                                    Track your requests in real-time
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '24px', fontWeight: '300', marginBottom: '20px' }}>Your Portal, Simplified</h3>
                            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                                Our client portal is designed to make your life easier. Securely upload documents, access tax returns, and communicate with our team—all in one place.
                            </p>
                            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                                Everything you need is just a click away. No complicated processes, no confusion—just simple, secure access to your financial information whenever you need it.
                            </p>
                            <div style={{
                                background: '#f8f8f8',
                                padding: '25px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #FF8C42',
                                marginTop: '30px'
                            }}>
                                <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>
                                    <strong style={{ color: '#FF8C42' }}>Need Help?</strong> Our support team is always ready to assist you. Contact us anytime if you have questions about using the portal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. FORMS SECTION */}
            <div id="forms" className="section-padding bg-light" style={{ padding: '40px 0' }}>
                <div className="container">
                    <h2 className="section-header" style={{ fontSize: '30px', fontWeight: '300', marginBottom: '30px' }}><strong>Forms</strong></h2>
                    <div className="hub-buttons" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                        {[
                            { name: 'W-9 Form', icon: 'fa-file-pdf' },
                            { name: 'W-4 Form', icon: 'fa-file-pdf' },
                            { name: 'I-9 Form', icon: 'fa-file-pdf' },
                            { name: 'PA Sales Tax Exemption', icon: 'fa-file-pdf' },
                            { name: 'Certificate of Residency', icon: 'fa-file-pdf' },
                            { name: 'Consent for Disclosure', icon: 'fa-file-pdf' },
                            { name: 'Client Draft Authorization', icon: 'fa-file-pdf' }
                        ].map((form, i) => (
                            <a key={i} href="#" className="btn-resource" style={{
                                background: '#FF8C42',
                                color: '#fff',
                                padding: '15px 10px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontWeight: '700',
                                fontSize: '14px',
                                borderRadius: '3px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px'
                            }}>
                                <i className={`fas ${form.icon}`}></i> {form.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6. GUIDES SECTION */}
            <div id="guides" className="section-padding bg-white" style={{ padding: '40px 0' }}>
                <div className="container">
                    <h2 className="section-header" style={{ fontSize: '30px', fontWeight: '300', marginBottom: '30px' }}><strong>Guides</strong></h2>
                    <div className="hub-buttons" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                        {[
                            { name: 'Estimate PA Tax Payment', icon: 'fa-link' },
                            { name: 'Federal (IRS) Tax Payments', icon: 'fa-link' },
                            { name: 'Watch MyPATH Video Tutorials', icon: 'fa-link' },
                            { name: '2025 Pocket Tax Guide', icon: 'fa-file-pdf' },
                            { name: 'Records Retention Guide', icon: 'fa-file-pdf' },
                            { name: 'Understand your Financial Statement', icon: 'fa-file-pdf' },
                            { name: 'Mid-Year Business Tune-Up Checklist', icon: 'fa-link' }
                        ].map((guide, i) => (
                            <a key={i} href="#" className="btn-resource" style={{
                                background: '#FF8C42',
                                color: '#fff',
                                padding: '15px 10px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontWeight: '700',
                                fontSize: '13px',
                                borderRadius: '3px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px'
                            }}>
                                <i className={`fas ${guide.icon}`}></i> {guide.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 7. QUESTIONNAIRES SECTION */}
            <div id="questionnaires" className="section-padding bg-light" style={{ padding: '40px 0' }}>
                <div className="container">
                    <h2 className="section-header" style={{ fontSize: '30px', fontWeight: '300', marginBottom: '30px' }}><strong>Questionnaires</strong></h2>
                    <div className="hub-buttons" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                        {[
                            { name: 'Business Questionnaire Online', icon: 'fa-link' },
                            { name: 'Personal Questionnaire Online', icon: 'fa-link' },
                            { name: 'Due Diligence Questionnaire Online', icon: 'fa-link' },
                            { name: 'Business Questionnaire (PDF)', icon: 'fa-file-pdf' },
                            { name: 'Personal Questionnaire (PDF)', icon: 'fa-file-pdf' },
                            { name: 'Due Diligence Questionnaire (PDF)', icon: 'fa-file-pdf' },
                            { name: 'Due Diligence Questionnaire (Spanish Version) (PDF)', icon: 'fa-file-pdf' },
                            { name: 'Foreign Tax Certification', icon: 'fa-file-pdf' }
                        ].map((q, i) => (
                            <a key={i} href="#" className="btn-resource" style={{
                                background: '#FF8C42',
                                color: '#fff',
                                padding: '15px 10px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontWeight: '700',
                                fontSize: '13px',
                                borderRadius: '3px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px'
                            }}>
                                <i className={`fas ${q.icon}`}></i> {q.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 8. NEWS SECTION */}
            <div id="news" className="section-padding bg-white" style={{ padding: '40px 0' }}>
                <div className="container">
                    <h2 className="section-header" style={{ fontSize: '32px', fontWeight: '300', marginBottom: '40px' }}>Recent <strong>News</strong></h2>
                    <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        {[
                            {
                                id: 1,
                                title: "Small Business Tax Strategies and Smart Moves for Small Business Owners",
                                date: "December 10, 2025",
                                excerpt: "Running a small business in Central PA, whether you're from Myerstown to Mechanicsburg, or Lancaster.",
                                image: shootImg,
                                link: "#"
                            },
                            {
                                id: 2,
                                title: "2025 1099 Filing Deadlines and IRS Changes Every Small Business Should Know",
                                date: "September 25, 2025",
                                excerpt: "Tax season is around the corner – are your 1099s ready? In this guide, we...",
                                image: careers1,
                                link: "#"
                            },
                            {
                                id: 3,
                                title: "A Complete Financial Health Check Guide for Business Owners",
                                date: "September 17, 2025",
                                excerpt: "Running a business requires more than a great product or loyal customers! It also requires...",
                                image: writing,
                                link: "#"
                            }
                        ].map(post => (
                            <div key={post.id} className="news-card" style={{ display: 'flex', flexDirection: 'column' }}>
                                <img src={post.image} alt={post.title} style={{ width: '100%', height: '220px', objectFit: 'cover', marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', lineHeight: '1.4' }}>
                                    <a href={post.link} style={{ color: '#FF8C42', textDecoration: 'underline' }}>{post.title}</a>
                                </h3>
                                <p style={{ color: '#888', fontSize: '13px', marginBottom: '15px' }}>{post.date}</p>
                                <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '15px', flexGrow: 1 }}>{post.excerpt}</p>
                                <a href={post.link} style={{ color: '#FF8C42', textDecoration: 'underline', fontWeight: '700', fontSize: '14px' }}>Read More</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* 9. LEAVE FEEDBACK SECTION */}
            <div id="feedback" className="section-padding" style={{ padding: '40px 0', backgroundColor: '#e8e8e8' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '80px', alignItems: 'center' }}>
                        <div className="text-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                alt="Google"
                                style={{ width: '200px', marginBottom: '15px' }}
                            />
                            <div style={{ color: '#fbbc05', fontSize: '24px', letterSpacing: '2px' }}>
                                ★★★★★
                            </div>
                            <h3 style={{ fontSize: '30px', fontWeight: '300', marginTop: '10px' }}>Reviews</h3>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '20px', color: '#333' }}>
                                Leave <strong>Feedback</strong>
                            </h2>
                            <p style={{ fontSize: '15px', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
                                Did you have a great experience working with ZN Tax and Accounting Services? We’d love to hear about it—and so would other business owners. Please consider reviewing us on Google.
                            </p>
                            <p style={{ fontSize: '15px', fontWeight: '700', color: '#333', marginBottom: '15px' }}>
                                Log your review based on the office that serves your accounting or bookkeeping needs:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    { name: 'Mechanicsburg', link: '#' },
                                    { name: 'Myerstown', link: '#' },
                                    { name: 'Harrisburg', link: '#' },
                                    { name: 'Lancaster', link: '#' }
                                ].map((office, i) => (
                                    <li key={i} style={{ marginBottom: '8px' }}>
                                        <a href={office.link} style={{ color: '#FF8C42', textDecoration: 'underline', fontSize: '15px' }}>
                                            • Review ZN Tax and Accounting Services in {office.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 10. OTHER RESOURCES SECTION */}
            <div id="other-resources" className="section-padding bg-white" style={{ padding: '40px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '40px', color: '#333' }}>
                        Other <strong>Resources</strong>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'end' }}>
                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <Link className="wp-block-button__link wp-element-button" to="/find-accountant" style={{
                                background: '#FF8C42', padding: '15px 30px', fontSize: '14px'
                            }}>
                                Find An Accountant
                            </Link>
                            <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{
                                background: '#FF8C42', padding: '15px 30px', fontSize: '14px'
                            }}>
                                Schedule A Consultation
                            </Link>
                            <Link className="wp-block-button__link wp-element-button" to="/careers" style={{
                                background: '#FF8C42', padding: '15px 30px', fontSize: '14px'
                            }}>
                                Join ZN Tax and Accounting Services
                            </Link>
                        </div>
                        <div>
                            <p style={{ fontSize: '14px', fontWeight: '700', color: '#333', marginBottom: '15px' }}>Follow Us on Social:</p>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{
                                    background: '#FF8C42', color: '#fff', width: '40px', height: '40px',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    textDecoration: 'none'
                                }}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
                                    background: '#FF8C42', color: '#fff', width: '40px', height: '40px',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    textDecoration: 'none'
                                }}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="/coming-soon" style={{
                                    background: '#FF8C42', color: '#fff', width: '40px', height: '40px',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    textDecoration: 'none'
                                }}>
                                    <i className="fas fa-clock"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientHub;


