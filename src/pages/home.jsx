import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleReviews from '../components/GoogleReviews';

// Import images
import heroImg from '../assets/images/hero.jpg';
import zulqarnainImage from '../assets/images/zulqarnainnasir.jpeg';

const Home = () => {
    const profileRefs = useRef([]);
    const serviceRefs = useRef([]);
    const sectionRefs = useRef([]);
    const whyChoosePillars = [
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

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.05 });

        profileRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });
        serviceRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });
        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalServiceSlides = 3;

    const handleScroll = (direction) => {
        if (trackRef.current) {
            const cardWidth = trackRef.current.offsetWidth / 2;
            const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
            trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            const newIndex = direction === 'next'
                ? Math.min(activeIndex + 1, totalServiceSlides - 1)
                : Math.max(activeIndex - 1, 0);
            setActiveIndex(newIndex);
        }
    };

    const scrollToSlide = (index) => {
        if (trackRef.current) {
            const cardWidth = trackRef.current.offsetWidth / 2;
            trackRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prev) => {
                const nextIndex = (prev + 1) % totalServiceSlides;
                if (trackRef.current) {
                    const cardWidth = trackRef.current.offsetWidth / 2;
                    trackRef.current.scrollTo({ left: nextIndex * cardWidth, behavior: 'smooth' });
                }
                return nextIndex;
            });
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="content-wrapper">
            {/* SECTION 1: HERO */}
            <div className="wp-block-cover alignfull is-light hero-section home-hero-merged">
                <img
                    fetchPriority="high"
                    decoding="async"
                    className="wp-block-cover__image-background"
                    alt="Professional tax consultant discussing financial planning"
                    src={heroImg}
                    style={{ objectFit: 'cover' }}
                />
                <span aria-hidden="true" className="wp-block-cover__background has-background-dim-0 has-background-dim" style={{ backgroundColor: '#e3e3e3' }}></span>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns is-layout-flex hero-columns" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <div className="wp-block-column hero-content-column" style={{ flex: '1 1 100%', minWidth: '20px', zIndex: 10, textAlign: 'left', maxWidth: '16%', margin: '0', fontFamily: '"Nunito", "Quicksand", "Segoe UI", sans-serif' }}>
                            <h1 className="wp-block-heading hero-title" style={{ maxWidth: '90%', fontSize: '10px', fontWeight: '500', marginBottom: '12px', marginLeft: '0', fontFamily: 'inherit' }}>The Toronto Tax and Accounting Service Firm <strong className="hero-business-green" style={{ fontWeight: '700', fontFamily: 'inherit' }}>for Your Business</strong></h1>
                            <p style={{  maxWidth: '75%',fontSize: '14px', fontWeight: '400', lineHeight: '1.55', marginBottom: '18px', fontFamily: 'inherit' }}>You want the best advice for your small to medium-sized business without breaking the bank. ZN is here to help with everything from bookkeeping to tax and accounting services and much more.</p>
                            <div className="wp-block-buttons hero-cta-row">
                                <div className="wp-block-button">
                                    <Link className="wp-block-button__link hero-btn-orange" to="/schedule" style={{ padding: '12px 24px', fontSize: '14px', fontWeight: '600' }}>Let’s Talk About It</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wp-block-column" style={{ flex: '1 1 54%' }}></div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: SERVICES GRID */}
            <div className="wp-block-cover alignfull is-light" style={{ paddingTop: '55px', paddingBottom: '40px' }}>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#ffffff' }}></span>
                <div className="wp-block-cover__inner-container container">
                    <h2 className="wp-block-heading" style={{ marginBottom: '15px', fontSize: '28px', fontWeight: '500' }}>Find the <strong style={{ fontWeight: '700' }}>Bookkeeping & Tax Services</strong> Your Small Business Needs</h2>

                    <div className="services-carousel-wrapper">
                        <button
                            className="slider-arrow arrow-prev"
                            onClick={() => handleScroll('prev')}
                            aria-label="Previous services"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        <div className="service-slider-track" ref={trackRef}>
                        {/* Service 1: Bookkeeping */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[0] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-book-bookmark"></i>
                            </div>
                            <div className="text-box">
                                <h3>Bookkeeping</h3>
                                <p>Are you feeling the effects of not having an in-house bookkeeper? Outsource it to start breathing easier.</p>
                                <Link to="/bookkeeping">Outsource Bookkeeping</Link>
                            </div>
                        </div>

                        {/* Service 2: Tax Planning */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[1] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                            </div>
                            <div className="text-box">
                                <h3>Tax Prep & Planning</h3>
                                <p>File on time, say goodbye to extensions, and make sure you’re not paying more in taxes than you should be.</p>
                                <Link to="/tax">File Without Worry</Link>
                            </div>
                        </div>

                        {/* Service 4: Business Registrations */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[3] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-file-signature"></i>
                            </div>
                            <div className="text-box">
                                <h3>Business Registrations & Dissolutions</h3>
                                <p>Get support with business setup, registrations, and dissolution filings so your structure stays compliant from start to finish.</p>
                                <a href="https://zentax.ca/" target="_blank" rel="noopener noreferrer">View Registration Services</a>
                            </div>
                        </div>

                    
                        {/* Service 6: QuickBooks */}
                        <div className="service-card-v2 animate-card" ref={el => serviceRefs.current[5] = el}>
                            <div className="icon-box-fa">
                                <i className="fa-solid fa-laptop-code"></i>
                            </div>
                            <div className="text-box">
                                <h3>QuickBooks</h3>
                                <p>From setup and installation to training and support, we'll help you get the most from QuickBooks and all its features.</p>
                                <Link to="/quickbooks">Optimize QuickBooks</Link>
                            </div>
                        </div>

                

                        </div>

                        <button
                            className="slider-arrow arrow-next"
                            onClick={() => handleScroll('next')}
                            aria-label="Next services"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                    <div className="slider-dots service-slider-dots">
                        {Array.from({ length: totalServiceSlides }).map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => scrollToSlide(index)}
                            ></span>
                        ))}
                    </div>
                    <p style={{ maxWidth: '1300px', margin: '40px auto 0', fontSize: '13px', textAlign: 'center' }}>Contact our team about supplementing your in-house bookkeeping, using CPA outsourcing services to your advantage, discovering all the perks of virtual CPA services, or just feeling more confident in your CPA tax services. It's all waiting for you at ZN Tax and Accounting Services.</p>
                </div>
            </div>
            {/* LEADERSHIP SECTION: ZULQARNAIN NASEER */}
            <div className="manager-section">
                <div className="leadership-shape"></div>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '0px', position: 'relative', zIndex: 1 }}>
                        <h2 className="wp-block-heading" style={{ fontSize: '28px', fontWeight: '400', color: '#000', marginTop: '0', marginBottom: '10px' }}>Our Leadership</h2>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        <div className="leadership-layout-shell" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: '16px', width: '100%', maxWidth: '1020px' }}>
                            <div className="leadership-photo-outside" style={{ flex: '0 0 220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <div className="manager-image-wrapper" style={{ width: '220px', height: '220px', borderRadius: '50%', margin: '0 auto', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', backgroundColor: '#0F1925', overflow: 'hidden' }}>
                                    <img src={zulqarnainImage} alt="Zulqarnain Nasir" style={{ width: '100%', height: '100%', minHeight: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="leadership-photo-caption" style={{ marginTop: '8px', fontSize: '16px', fontWeight: '700', color: '#0F1925', textAlign: 'center' }}>
                                    Zulqarnain Nasir
                                </div>
                            </div>

                            <div
                                className="profile-card-minimal leadership-info-card"
                                ref={el => profileRefs.current[0] = el}
                                style={{ flex: '0 1 62%', maxWidth: '62%', marginLeft: 'auto', padding: '18px 22px' }}
                            >
                                <div className="leadership-card-top" style={{ textAlign: 'center', marginBottom: '8px' }}>
                                    <span className="title" style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '1.4px', fontWeight: '700' }}>Principal Accountant, CEO & Partner</span>
                                </div>
                                <div className="leadership-text-container" style={{ textAlign: 'center', maxWidth: '700px', minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div className="manager-bio" style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#555', margin: '0' }}>
                                            Zulqarnain leads ZN Tax and Accounting Services Professional Corporation with a commitment to integrity and strategic excellence. He specializes in Tax Perp and complex tax planning for SMEs and professional corporations of doctors and dentists.
                                        </p>
                                    </div>
                                </div>

                                <div className="expertise-grid" style={{ paddingTop: '10px', marginTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(120px, 1fr))', gap: '10px' }}>
                                    <div className="expertise-item" style={{ padding: '12px 14px', backgroundColor: '#f0f2f5', borderRadius: '14px', border: '1px solid transparent' }}>
                                        <i className="fa-solid fa-chart-line" style={{ color: '#0F1925', marginBottom: '6px', fontSize: '19px' }}></i>
                                        <span style={{ fontWeight: '700', fontSize: '12px', color: '#333' }}>Tax Strategy</span>
                                    </div>
                                    <div className="expertise-item" style={{ padding: '12px 14px', backgroundColor: '#f0f2f5', borderRadius: '14px', border: '1px solid transparent' }}>
                                        <i className="fa-solid fa-sliders" style={{ color: '#0F1925', marginBottom: '6px', fontSize: '19px' }}></i>
                                        <span style={{ fontWeight: '700', fontSize: '12px', color: '#333' }}>Financial Control</span>
                                    </div>
                                    <div className="expertise-item" style={{ padding: '12px 14px', backgroundColor: '#f0f2f5', borderRadius: '14px', border: '1px solid transparent' }}>
                                        <i className="fa-solid fa-compass-drafting" style={{ color: '#0F1925', marginBottom: '6px', fontSize: '19px' }}></i>
                                        <span style={{ fontWeight: '700', fontSize: '12px', color: '#333' }}>Strategic Planning</span>
                                    </div>
                                    <div className="expertise-item" style={{ padding: '12px 14px', backgroundColor: '#f0f2f5', borderRadius: '14px', border: '1px solid transparent' }}>
                                        <i className="fa-solid fa-users-gear" style={{ color: '#0F1925', marginBottom: '6px', fontSize: '19px' }}></i>
                                        <span style={{ fontWeight: '700', fontSize: '12px', color: '#333' }}>Consulting</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="leadership-layout-shell" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: '16px', width: '100%', maxWidth: '1020px' }}>
                            <div className="leadership-photo-outside" style={{ flex: '0 0 220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <div className="manager-image-wrapper" style={{ width: '220px', height: '220px', borderRadius: '50%', margin: '0 auto', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', backgroundColor: '#0F1925', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fa-solid fa-user-tie" style={{ color: '#ffffff', fontSize: '92px' }}></i>
                                </div>
                                <div className="leadership-photo-caption" style={{ marginTop: '8px', fontSize: '16px', fontWeight: '700', color: '#0F1925', textAlign: 'center' }}>
                                    Usman Yousaf
                                </div>
                            </div>

                            <div
                                className="profile-card-minimal leadership-info-card"
                                ref={el => profileRefs.current[1] = el}
                                style={{ flex: '0 1 62%', maxWidth: '62%', marginLeft: 'auto', padding: '18px 22px' }}
                            >
                                <div className="leadership-card-top" style={{ textAlign: 'center', marginBottom: '8px' }}>
                                    <span className="title" style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '1.4px', fontWeight: '700' }}>Manager</span>
                                </div>
                                <div className="leadership-text-container" style={{ textAlign: 'center', maxWidth: '700px', minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <p className="leadership-location" style={{ color: '#FF8C42', fontWeight: '700', fontSize: '16px', margin: '0', marginBottom: '8px' }}>
                                        Compliance and Financial Control
                                    </p>
                                    <div className="manager-bio" style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#555', margin: '0' }}>
                                            Usman is a senior financial professional with extensive experience in banking, treasury management, and accounting. He works closely with businesses to deliver trusted advisory, audit, and accounting services tailored to their specific needs.
                                        </p>
                                    </div>
                                </div>

                                <div className="expertise-grid" style={{ paddingTop: '10px', marginTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(120px, 1fr))', gap: '10px' }}>
                                    <div className="expertise-item" style={{ padding: '12px 14px', backgroundColor: '#f0f2f5', borderRadius: '14px', border: '1px solid transparent' }}>
                                        <i className="fa-solid fa-money-bill-trend-up" style={{ color: '#0F1925', marginBottom: '6px', fontSize: '19px' }}></i>
                                        <span style={{ fontWeight: '700', fontSize: '12px', color: '#333' }}>Cash Flow Management</span>
                                    </div>
                                    <div className="expertise-item" style={{ padding: '12px 14px', backgroundColor: '#f0f2f5', borderRadius: '14px', border: '1px solid transparent' }}>
                                        <i className="fa-solid fa-sliders" style={{ color: '#0F1925', marginBottom: '6px', fontSize: '19px' }}></i>
                                        <span style={{ fontWeight: '700', fontSize: '12px', color: '#333' }}>Financial Control</span>
                                    </div>
                                    <div className="expertise-item" style={{ padding: '12px 14px', backgroundColor: '#f0f2f5', borderRadius: '14px', border: '1px solid transparent' }}>
                                        <i className="fa-solid fa-shield-halved" style={{ color: '#0F1925', marginBottom: '6px', fontSize: '19px' }}></i>
                                        <span style={{ fontWeight: '700', fontSize: '12px', color: '#333' }}>Compliance</span>
                                    </div>
                                    <div className="expertise-item" style={{ padding: '12px 14px', backgroundColor: '#f0f2f5', borderRadius: '14px', border: '1px solid transparent' }}>
                                        <i className="fa-solid fa-compass-drafting" style={{ color: '#0F1925', marginBottom: '6px', fontSize: '19px' }}></i>
                                        <span style={{ fontWeight: '700', fontSize: '12px', color: '#333' }}>Strategy Planning</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: Why Choose */}
            <div className="section-padding" style={{ backgroundColor: '#ffffff', padding: '70px 0 70px' }}>
                <div className="container" style={{ maxWidth: '1250px' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <h2 className="wp-block-heading" style={{ margin: '0', fontSize: '28px', fontWeight: '500', color: '#111827' }}>
                            Why Choose <strong>ZN Tax and Accounting Services?</strong>
                        </h2>
                    </div>

                    <div className="why-choose-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '30px' }}>
                        {whyChoosePillars.map((item, i) => (
                            <article key={i} className="why-choose-card" style={{ color: '#1f2937', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '24px 22px 20px', boxShadow: '0 10px 24px rgba(15,25,37,0.08)', textAlign: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                                    <div style={{ width: '54px', height: '54px', minWidth: '54px', borderRadius: '50%', border: '1px solid rgba(255, 140, 66, 0.6)', background: 'rgba(255, 140, 66, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className={`fa-solid ${item.icon}`} style={{ color: '#FF8C42', fontSize: '22px' }}></i>
                                    </div>
                                    <h3 className="why-choose-card-title" style={{ margin: '0', color: '#111827', fontSize: '16px', fontWeight: '800', lineHeight: '1.2', letterSpacing: '0.3px', textAlign: 'center' }}>
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="why-choose-card-desc" style={{ margin: '18px 0 0', color: '#4b5563', fontSize: '13px', lineHeight: '1.7', fontWeight: '500' }}>
                                    {item.desc}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 4: Career & Work With Us */}
            <div className="wp-block-cover alignfull is-light " style={{ backgroundColor: '#ffffff', paddingTop: '30px', paddingBottom: '30px' }}>
                <div className="wp-block-cover__inner-container container">
                    <div className="wp-block-columns are-vertically-aligned-center">
                        <div className="wp-block-column" style={{ flexBasis: '40%', paddingBottom: '0px', marginBottom: '0px' }}>
                            <span className="difference-tag" style={{ marginBottom: '0px' }}>Join Our Team</span>
                        </div>
                        <div className="wp-block-column cta-modern career-section" style={{ flexBasis: '60%', marginLeft: '10px', paddingTop: '0px', background: '#ffffff' }}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Professional Career" style={{ width: '100%' }} />
                            <div className="career-content" style={{ paddingTop: '0px' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '15px', lineHeight: '1.2' }}>Interested in a Career with <strong style={{ fontWeight: '700' }}>a Respected Tax Firm</strong>?</h3>
                                <p style={{ color: '#666', marginBottom: '20px', fontSize: '13px' }}>Join a culture of professional growth and excellence. We are always looking for talented individuals to join our hierarchy of experts.</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                    <Link className="career-link" to="/careers" style={{ fontSize: '16px' }}>Work For ZN Tax <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="consultation-section-modern" style={{ backgroundColor: '#ffffff', paddingTop: '30px', paddingBottom: '20px', marginTop: '0', position: 'relative', overflow: 'hidden' }}>
                <div className="consultation-pattern" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03, backgroundImage: 'radial-gradient(circle, #1F2937 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.03) 0%, rgba(255, 140, 66, 0.03) 100%)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(31, 41, 55, 0.1)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
                        <div style={{ flex: '1 1 auto', display: 'flex', alignItems: 'center', gap: '25px' }}>
                            <div className="consultation-icon-wrapper" style={{ flex: '0 0 auto', width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(31, 41, 55, 0.3)' }}>
                                <i className="fa-solid fa-calendar-check" style={{ fontSize: '30px', color: '#fff' }}></i>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '24px', fontWeight: '500', margin: '0 0 8px 0', color: '#000', lineHeight: '1.2' }}>Schedule a Consultation</h3>
                                <p style={{ margin: '0', fontSize: '13px', color: '#666', lineHeight: '1.2' }}>Discover how our structured approach can transform your business's financial future.</p>
                            </div>
                        </div>
                        <div style={{ flex: '0 0 auto' }}>
                            <Link className="consultation-btn-modern" to="/schedule" style={{ padding: '16px 40px', borderRadius: '50px', fontSize: '15px', fontWeight: '700', whiteSpace: 'nowrap', background: 'linear-gradient(135deg,#FF8C42 100%, #DF7A32 0%)', color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 8px 20px rgba(255, 140, 66, 0.3)', transition: 'all 0.3s ease' }}>Book Now <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <GoogleReviews />
        </div>
    );
};

export default Home;


