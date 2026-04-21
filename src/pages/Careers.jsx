import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../assets/images/white-bg.jpg';
import GoogleReviews from '../components/GoogleReviews';

const Careers = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        document.title = "Careers | ZN Tax and Accounting Services - Join Our Accounting Team";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Build your career with ZN Tax and Accounting Services. We are looking for motivated accounting professionals to join our growing team in Pennsylvania.");
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="careers-page" style={{
            backgroundImage: `url(${whiteBg})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light careers-hero" style={{
                minHeight: '350px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '60px',
                background: '#f5f7f8',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div
                    className="wp-block-cover__image-background"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.3
                    }}
                ></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '45%',
                    height: '100%',
                    background: '#e9ecef',
                    clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                    zIndex: 1,
                    opacity: 0.5
                }}></div>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 className="wp-block-heading careers-main-title" style={{
                        fontSize: '48px',
                        color: '#000',
                        fontWeight: '300',
                        marginBottom: '15px',
                        lineHeight: '1.2'
                    }}>Join the ZN Tax and Accounting Services <strong style={{ color: '#000', fontWeight: '700' }}>Team</strong></h1>
                    <p style={{
                        fontSize: '22px',
                        color: '#666',
                        maxWidth: '800px',
                        margin: '0 0 25px 0',
                        lineHeight: '1.5',
                        fontWeight: '400'
                    }}>Apply Today If You Want to Work for a Company Dedicated to Helping Businesses and Nonprofits Make an Impact</p>
                    <div className="wp-block-buttons" style={{ marginTop: '20px' }}>
                        <div className="wp-block-button">
                            <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                                backgroundColor: '#FF8C42',
                                color: '#fff',
                                borderRadius: '30px',
                                padding: '12px 35px',
                                fontWeight: 'bold',
                                fontSize: '15px',
                                boxShadow: '0 4px 15px rgba(255, 140, 66, 0.3)',
                                transition: 'all 0.3s ease'
                            }}>See Job Openings</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Growing Team Section */}
            <div className="wp-block-cover alignfull is-light page-responsive-padding" style={{ backgroundColor: '#f9f9f9', paddingTop: '30px', paddingBottom: '10px' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns is-vertically-aligned-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                        <div className="wp-block-column animate-side-left" style={{ flex: '1 1 100%' }} ref={el => sectionRefs.current[0] = el}>
                            <h2 className="wp-block-heading" style={{ fontSize: '32px', fontWeight: '700', color: '#000', marginBottom: '20px' }}><strong>Our Team</strong> is Always Growing</h2>
                            <p className="careers-intro-text" style={{ lineHeight: '1.8', fontSize: '15px', color: '#555' }}>Are you looking to build a career with an accounting job that gives you a chance to grow? Or are you an experienced CPA looking to move into a comfortable bookkeeper job? We want to provide you with a position that meets your needs and builds our team to be the best it can be.</p>
                            <p className="careers-intro-text" style={{ lineHeight: '1.8', fontSize: '15px', color: '#555', marginTop: '15px' }}>Our team is full of lifelong learners, passionate workers, and good people. When you join us, we will welcome you with open arms and give you every opportunity to grow your career and experience alongside our company. If you are interested in developing a career with us, contact us today!</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Benefits & Locations Section */}
            <div className="wp-block-cover alignfull is-light" style={{ backgroundColor: '#eeeeee', padding: '20px 0' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center benefits-location-columns" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                        <div className="wp-block-column" style={{ flex: '1 1 450px' }}>
                            <div className="glass-effect" style={{ padding: '40px', borderRadius: '30px', backgroundColor: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <h2 className="wp-block-heading" style={{ fontSize: '26px', marginBottom: '20px', fontWeight: '700', color: '#000' }}>You’ll <strong>Enjoy These Benefits</strong></h2>
                                <p style={{ marginBottom: '15px', color: '#666', fontSize: '13px' }}>We think our employees deserve the best:</p>
                                <ul className=" checkmark benefits-list" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                                    {[
                                        'Medical, Dental, & Vision Insurance',
                                        'Group Life Insurance ($20K)',
                                        'Company 401K Plan (6% match)',
                                        'Volunteer PTO (16 hours)',
                                        'Half-day Fridays (Summer)',
                                        'Flexible Hours',
                                        'Hybrid Schedule',
                                        'Retail Club Membership',
                                        'Paid Professional Dues',
                                        'Competitive Salary',
                                        'Fun Culture'
                                    ].map((benefit, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: '#333', fontSize: '12px', lineHeight: '1.4' }}>
                                            <i className="fa-solid fa-check" style={{ color: '#28a745', marginRight: '8px', marginTop: '3px', fontSize: '12px' }}></i>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ marginTop: '20px', fontSize: '11px', color: '#666' }}>For more info, <a href="/contact" style={{ color: '#FF8C42', textDecoration: 'underline' }}>contact us</a> today.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="wp-block-cover alignfull is-light has-parallax section-padding" style={{ backgroundColor: '#f9f9f9', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flex: '1 1 100%' }}>
                            <h2 className="wp-block-heading text-center" style={{ fontSize: '32px', fontWeight: '700', color: '#000' }}>Does This <strong>Sound Like You?</strong></h2>
                            <p className="text-center" style={{ fontSize: '13px', lineHeight: '1.6', maxWidth: '900px', margin: '20px auto' }}>
                                Our family is built based on our core company values:
                            </p>
                            <div className="values-grid">
                                <div className="value-item hover-pop-image" style={{ textAlign: 'center', backgroundColor: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 15px 30px rgba(0,0,0,0.05)' }}>
                                    <div style={{ color: '#1F2937' }}><i className="fa-solid fa-heart"></i></div>
                                    <h3 style={{ color: '#000', fontWeight: '700' }}>Honesty</h3>
                                    <p>Full transparency and integrity in every interaction with clients and coworkers.</p>
                                </div>
                                <div className="value-item hover-pop-image" style={{ textAlign: 'center', backgroundColor: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 15px 30px rgba(0,0,0,0.05)' }}>
                                    <div style={{ color: '#1F2937' }}><i className="fa-solid fa-handshake-angle"></i></div>
                                    <h3 style={{ color: '#000', fontWeight: '700' }}>Humility</h3>
                                    <p>Taking accountability and valuing the input and advice of our teammates.</p>
                                </div>
                                <div className="value-item hover-pop-image" style={{ textAlign: 'center', backgroundColor: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 15px 30px rgba(0,0,0,0.05)' }}>
                                    <div style={{ color: '#1F2937' }}><i className="fa-solid fa-business-time"></i></div>
                                    <h3 style={{ color: '#000', fontWeight: '700' }}>Dependability</h3>
                                    <p>Being responsive, staying organized, and following through consistently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Qualifications Section */}
            <div className="wp-block-cover alignfull is-light page-responsive-padding" style={{ backgroundColor: '#f0f2f5', paddingTop: '40px', paddingBottom: '60px' }}>
                <div className="wp-block-cover__inner-container container">
                    <h2 className="wp-block-heading" style={{ fontSize: '36px', fontWeight: '700', marginBottom: '25px', color: '#000' }}><strong>Qualifications</strong> <span style={{ color: '#666' }}>We Look For</span></h2>
                    <p style={{ fontSize: '15px', color: '#555', marginBottom: '40px', lineHeight: '1.6' }}>When we seek an accountant or bookkeeper, we have a few major qualifications:</p>

                    <div className="wp-block-columns" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                        {/* Hard Skills */}
                        <div className="wp-block-column" style={{ flex: '1 1 450px', padding: '40px', borderRadius: '30px', backgroundColor: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <h3 className="wp-block-heading" style={{ fontSize: '22px', marginBottom: '25px', fontWeight: '700', color: '#000' }}>Hard Skills</h3>
                            <ul className="" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                {[
                                    { title: 'Certifications for managing finances and advising', text: 'Certifications for managing finances and advising.' },
                                    { title: 'Experience with Taxcycle and learning new tools', text: 'Experience with UltraTax and learning new tools.' },
                                    { title: 'Tax Preparation', text: 'Individual, fiduciary, corporate, and partnership returns.' }
                                ].map((skill, i) => (
                                    <li key={i} style={{ fontSize: '12px', lineHeight: '1.6' }}>
                                        <div style={{ color: '#FF8C42', fontWeight: '700', marginBottom: '5px' }}>{skill.title}</div>
                                        <div style={{ color: '#555' }}>{skill.text}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Soft Skills */}
                        <div className="wp-block-column" style={{ flex: '1 1 450px', padding: '40px', borderRadius: '30px', backgroundColor: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <h3 className="wp-block-heading" style={{ fontSize: '22px', marginBottom: '25px', fontWeight: '700', color: '#000' }}>Soft Skills</h3>
                            <ul className="" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                {[
                                    { title: 'Strategizing', text: 'Big-picture strategies and innovative solutions.' },
                                    { title: 'Communication', text: 'Professionalism and clarity with all clients.' },
                                    { title: 'Learning', text: 'Keeping up with constant financial tool changes.' },
                                    { title: 'Self-reliance', text: 'Juggling multiple engagements efficiently.' }
                                ].map((skill, i) => (
                                    <li key={i} style={{ fontSize: '12px', lineHeight: '1.6' }}>
                                        <div style={{ color: '#FF8C42', fontWeight: '700', marginBottom: '5px' }}>{skill.title}</div>
                                        <div style={{ color: '#555' }}>{skill.text}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            {/* SERVICES DELIVERED (Grid matching homepage) */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', backgroundColor: '#1F2937', paddingTop: '60px', paddingBottom: '60px' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '32px', marginBottom: '10px', color: '#fff', fontWeight: '700' }}>The Services <strong>We Deliver</strong></h2>
                    <p className="text-center" style={{ marginBottom: '40px', fontSize: '16px', opacity: 0.9 }}>Our clients receive a full range of services from our accounting professionals:</p>
                    <div className="service-grid-v2 center-last-item">
                        {[
                            { title: 'Bookkeeping', icon: 'fa-book-bookmark', link: '/bookkeeping' },
                            { title: 'Tax Prep & Planning', icon: 'fa-file-invoice-dollar', link: '/tax' },

                            { title: 'Business Consulting', icon: 'fa-users-gear', link: '/consulting' },

                            { title: 'QuickBooks® Services', icon: 'fa-laptop-code', link: '/quickbooks' },

                        ].map((s, i) => (
                            <div key={i} className="service-card-v2 animate-card revealed" style={{ opacity: 1, transform: 'none' }}>
                                <div className="icon-box-fa">
                                    <i className={`fa-solid ${s.icon}`}></i>
                                </div>
                                <div className="text-box">
                                    <h3 style={{ color: '#000', margin: 0 }}>{s.title}</h3>
                                    <Link to={s.link} style={{ color: '#1F2937', fontWeight: '600' }}>Learn More</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ height: '60px' }}></div>

                    <div className="cta-bottom-bar text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '40px' }}>
                        <h2 className="wp-block-heading text-center" style={{ color: '#fff', fontSize: '30px', fontWeight: '700', marginBottom: '15px' }}>Work with ZN Tax and Accounting Services Today!</h2>
                        <p className="text-center" style={{ color: '#fff', marginBottom: '30px', fontSize: '16px', opacity: 0.95 }}>
                            If you’d like to explore how you can help provide our clients with these services, look into the <Link to="/schedule" style={{ color: '#fff', textDecoration: 'underline' }}>positions currently open</Link> at ZN Tax and Accounting Services.
                        </p>
                        <div className="wp-block-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <Link className="wp-block-button__link" to="/contact" style={{
                                padding: '15px 40px',
                                backgroundColor: '#FF8C42',
                                color: '#fff',
                                borderRadius: '30px',
                                fontWeight: '700',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                            }}>View Open Positions</Link>
                            <Link className="wp-block-button__link" to="/contact" style={{
                                padding: '15px 40px',
                                backgroundColor: '#FF8C42',
                                color: '#fff',
                                borderRadius: '30px',
                                fontWeight: '700',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                            }}>Apply Today</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Reviews Section */}
            <GoogleReviews />
        </div>
    );
};

export default Careers;


