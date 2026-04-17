import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';
import blueBg from '../assets/images/blue-bg.jpg';

const Consulting = () => {
    const faqItems = [
        {
            question: "Why Should I Hire a Consultant to Grow My Business?",
            answer: "Business consultants provide an objective, expert perspective on your operations. We help you identify hidden inefficiencies, stress-test your growth plans, and provide the financial clarity required to make high-stakes decisions with confidence."
        },
        {
            question: "How Can Small Business Consulting Help My Business?",
            answer: "Our consulting helps you move from reactive to proactive management. We assist with cash flow analysis, tax minimization strategies, and long-term goal setting, ensuring that your financial foundation is strong enough to support your ambitions."
        },
        {
            question: "When Should I Hire a Small Business Financial Consultant?",
            answer: "The best time is before you hit a plateau or a crisis. Whether you are planning a startup, preparing for an acquisition, or navigating a period of rapid growth, a consultant provides the roadmap to ensure your expansion is sustainable."
        }
    ];

    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light careers-hero page-responsive-padding" style={{
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '60px',
                background: `linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h1 className="wp-block-heading" style={{ fontSize: '48px', color: '#000', fontWeight: '700', lineHeight: '1.2' }}>
                                Small Business <strong>Consulting</strong>
                            </h1>
                            <p style={{ fontSize: '20px', color: '#444', maxWidth: '850px', margin: '25px 0', lineHeight: '1.6', fontWeight: '400' }}>
                                Strategic roadmaps to help your business evolve, grow, and overcome financial roadblocks with confidence.
                            </p>
                            <div className="wp-block-buttons" style={{ marginTop: '30px' }}>
                                <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                                    background: '#FF8C42',
                                    borderRadius: '30px',
                                    padding: '15px 40px',
                                    boxShadow: '0 10px 20px rgba(255, 140, 66, 0.2)'
                                }}>
                                    Consult With ZN Tax and Accounting Services
                                </Link>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 300px' }}>
                            <div className="floating-icon-stack">
                                <div className="icon-blob"></div>
                                <i className="fa-solid fa-users-gear main-decorated-icon"></i>
                                <i className="fa-solid fa-compass sub-icon sub-icon-1"></i>
                                <i className="fa-solid fa-chess sub-icon sub-icon-2"></i>
                                <i className="fa-solid fa-gem sub-icon sub-icon-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 1: Take Your Small Business to the Next Level */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* Image Column */}
                        <div style={{ flex: '40%', zIndex: 2 }}>
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Strategic Partnership" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        {/* Floating Text Card */}
                        <div className="process-floating-card" style={{
                            flex: '65%',
                            background: '#fff',
                            padding: '60px 60px 60px 115px',
                            marginLeft: '-10%',
                            zIndex: 1,
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                            borderRadius: '4px'
                        }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Take Your Small Business <strong>to the Next Level?</strong>
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    When the opportunity presents itself to grow your business, you might be frozen by indecision - how do you grow your business without creating waste or making costly mistakes? What if you grow too fast and suffer from success? What if you grow too slow and miss an opportunity?
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    These questions can leave you spinning in circles, but with small business financial consultants, you can have the answers you need - even before you ask. Our business financial consultants can assess your business with an honest and experienced eye. Then, you'll get expert advice from our CPA financial consulting team with clients throughout Pennsylvania.
                                </p>
                                <p style={{ fontWeight: '500' }}>
                                    Lead your business more confidently after <Link to="/contact" style={{ color: '#FF8C42', textDecoration: 'underline' }}>contacting our team</Link> and scheduling a no-cost consultation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: Get These Services */}
            <div className="section-padding bg-light" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '60px', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                Get These Services with <strong>Small Business Financial Consulting</strong>
                            </h2>
                            <p style={{ fontSize: '15px', color: '#555', marginBottom: '25px', lineHeight: '1.7' }}>
                                Business strategy consulting can improve your business by leaps and bounds if you are a small business or nonprofit in <Link to="/mechanicsburg" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Mechanicsburg</Link>, <Link to="/myerstown" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Myerstown</Link>, <Link to="/harrisburg" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Harrisburg</Link>, and <Link to="/lancaster" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Lancaster</Link>. You can expect a partnership with ZN Tax and Accounting Services to:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                                {[
                                    'Provide Cash-Flow Analysis',
                                    'Guide Daily Financial Operations',
                                    'Create Long-Term Business Goals and Monitor Progress',
                                    'Strategize Ways to Minimize Tax Obligations',
                                    'Assist with Executive-Level Business Decisions',
                                    'Explain PA Sales Tax & Use Tax',
                                    'Evaluate Succession Planning Options',
                                    'Help to Develop an Exit Strategy'
                                ].map((service, i) => (
                                    <li key={i} style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative', fontSize: '15.5px', color: '#444' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#FF8C42', fontWeight: 'bold' }}>✓</span> {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Strategy Development" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>

                    {/* Red Box Statement - Moved to Full Width */}
                    <div style={{ borderLeft: '6px solid #FF8C42', background: '#fff', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginTop: '40px' }}>
                        <p style={{ fontSize: '15.5px', color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                            Your success is not a one-time achievement; it is constantly changing and moving ahead. A successful business is built by constantly re-assessing and redefining your goals. Our team is committed to helping you reach your goals again and again. Our business financial consultants go beyond developing strategies - we'll develop a relationship that gives a deeper understanding of your business's needs.
                        </p>
                        <p style={{ fontSize: '17px', fontWeight: '700', color: '#333', marginBottom: '25px' }}>
                            It's time to build a better business together!
                        </p>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#FF8C42', padding: '15px 40px' }}>
                            Contact ZN Tax and Accounting Services
                        </Link>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: Services Block */}
            <div className="section-padding" style={{
                position: 'relative',
               backgroundColor: '#1F2937',
                color: '#fff',
                textAlign: 'center',
                padding: '80px 0'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '300', marginBottom: '20px' }}>
                        <strong>Business Consulting</strong> is Just the Beginning at ZN Tax and Accounting Services
                    </h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px', fontSize: '16px', opacity: 0.9 }}>
                        You know that we offer comprehensive, customizable consulting services for small businesses. But did you also know that we offer a variety of accounting services as well?
                    </p>

                    <div className="service-grid-v2 center-last-item" style={{ marginTop: '10px', marginBottom: '40px' }}>
                        {[
                            { title: 'Bookkeeping', icon: 'fa-book-bookmark', link: '/bookkeeping' },
                            { title: 'Tax Prep & Planning', icon: 'fa-file-invoice-dollar', link: '/tax' },
                            { title: 'Business Registrations & Dissolutions', icon: 'fa-file-signature', link: 'https://zentax.ca/', external: true },
                            { title: 'QuickBooks® Services', icon: 'fa-laptop-code', link: '/quickbooks' }
                        ].map((service, index) => (
                            <div key={index} className="service-card-v2 animate-card revealed" style={{ opacity: 1, transform: 'none' }}>
                                <div className="icon-box-fa">
                                    <i className={`fa-solid ${service.icon}`}></i>
                                </div>
                                <div className="text-box">
                                    <h3 style={{ margin: 0 }}>{service.title}</h3>
                                    {service.external ? (
                                        <a href={service.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1F2937', fontWeight: '600' }}>Learn More</a>
                                    ) : (
                                        <Link to={service.link} style={{ color: '#1F2937', fontWeight: '600' }}>Learn More</Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '15px', marginBottom: '30px' }}>
                        Find the services you need, provided by people who want to see your business succeed. The ZN Tax and Accounting Services team is waiting to hear from you.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link className="wp-block-button__link" to="/schedule" style={{ padding: '12px 35px', background: '#FF8C42', borderRadius: '50px', fontWeight: 'bold' }}>Find An Accountant</Link>
                        <Link className="wp-block-button__link" to="/contact" style={{ padding: '12px 35px', background: '#FF8C42', borderRadius: '50px', fontWeight: 'bold' }}>Find A Bookkeeper</Link>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: Industries We Serve */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '300', color: '#333', marginBottom: '25px' }}>
                        Industries <strong>We Serve</strong>
                    </h2>
                    <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                        <p style={{ marginBottom: '15px' }}>
                            At ZN Tax and Accounting Services, we understand that every industry faces unique financial challenges and opportunities. Our business financial consulting services are tailored to meet the specific needs of your organization—no matter the field you're in. By combining industry expertise with personalized attention, we help businesses make informed decisions that drive profitability and long-term success.
                        </p>
                        <p style={{ fontWeight: '700', color: '#333' }}>Industries we proudly serve include:</p>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                        {[
                            { name: 'Construction', link: '/construction', desc: 'Offering specialized Construction Accounting Services that help contractors and builders manage project costs, improve cash flow, and ensure compliance.' },
                            { name: 'Healthcare', link: '/healthcare', desc: 'Providing financial clarity and operational support to healthcare practices and medical professionals with our Healthcare Accounting Services.' },
                            { name: 'Manufacturing', link: '/manufacturing', desc: 'Streamlining accounting processes and helping manufacturers manage inventory, costs, and growth strategies with our Manufacturing Accounting Services.' },
                            { name: 'Real Estate', link: '/real-estate', desc: 'Delivering insights for property management firms, developers, and real estate investors to enhance profitability with our Real Estate Accounting Services.' },
                            { name: 'Law Firms', link: '/law-firms', desc: 'Offering solutions designed to simplify trust accounting, billing, and expense tracking with our Law Firm Accounting Services.' },
                            { name: 'E-commerce', link: '/ecommerce', desc: 'Assisting online retailers in managing revenue recognition, taxes, and growth forecasting with our E-commerce Accounting Services.' },
                            { name: 'Agricultural', link: '/agricultural', desc: 'Supporting farms and agribusinesses with budgeting, forecasting, and financial management for sustainable growth with our Agricultural Accounting Services.' }
                        ].map((industry, i) => (
                            <li key={i} style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative', fontSize: '14.5px', color: '#444' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#333', fontWeight: 'bold' }}>•</span>
                                <strong>{industry.name}</strong> – {industry.desc.split(industry.name + ' Accounting Services')[0]}
                                <Link to={industry.link} style={{ color: '#FF8C42', textDecoration: 'underline' }}>{industry.name} Accounting Services</Link>
                                {industry.desc.split(industry.name + ' Accounting Services')[1]}
                            </li>
                        ))}
                    </ul>

                    <p style={{ fontSize: '14px', color: '#555', fontStyle: 'italic' }}>
                        Each industry benefits from our deep understanding of its unique accounting and consulting needs, helping clients achieve financial confidence and stability.
                    </p>
                </div>
            </div>

            {/* NEW SECTION: Frequently Asked Questions */}
            <div className="section-padding bg-light" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '15px' }}>
                            Frequently Asked Questions <strong>About Small Business Financial Consulting</strong>
                        </h2>
                        <p style={{ fontSize: '15.5px', color: '#666', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.6' }}>
                            If you've made it this far, you already have questions for us to answer and need them answered now. Here are some of the most common questions we answer daily – if we haven't addressed your question here or you'd like more information, please <Link to="/contact" style={{ color: '#FF8C42', textDecoration: 'underline' }}>contact our team</Link>.
                        </p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <FAQ items={faqItems} />
                    </div>

                    <div className="text-center" style={{ marginTop: '50px' }}>
                        <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', maxWidth: '850px', margin: '0 auto 40px auto' }}>
                            When you work with the ZN Tax and Accounting Services team, you will always have a team of professional business accounting experts available to answer your most pressing questions. If you want to learn more about our areas of expertise and what you can expect from our small business financial consultants, call us today and start the conversation!
                        </p>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#FF8C42', padding: '15px 50px' }}>
                            Contact ZN Tax and Accounting Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consulting;


