import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';
import Valuation from '../assets/images/AdobeStock_306647077.jpg';
const Valuations = () => {
    const needReasons = [
        "Selling or Buying a Business",
        "Mergers and Acquisitions",
        "Seeking Investment or Financing",
        "Legal Purposes",
        "Financial Reporting",
        "Exit Planning",
        "Employee Stock Ownership Plans (ESOPs)",
        "Strategic Planning",
        "Insurance Purposes",
        "Litigation Support"
    ];

    const faqItems = [
        {
            question: "How Long Does it Take to Complete a Business Valuation?",
            answer: "The timeline for a business valuation can vary based on the complexity of the business and the availability of financial records. Typically, a comprehensive valuation takes between two to four weeks from the time all requested documents are received."
        },
        {
            question: "What Documents are Required for a Business Valuation?",
            answer: "Key documents include at least three to five years of year-end financial statements (Profit & Loss and Balance Sheets), federal income tax returns, current-year interim financial statements, business tax returns, detail of owner's compensation, and a list of fixed assets."
        },
        {
            question: "How Often Should a Business Be Valued?",
            answer: "For strategic planning and monitoring business growth, we recommend a valuation every two to three years. However, specific events like preparing for a sale, adding a partner, or significant market changes may require more frequent assessment."
        },
        {
            question: "How Can I Know if a Business Valuation is Accurate?",
            answer: "Our valuations are performed using industry-standard methodologies including Market, Income, and Asset approaches. We dive deep into your specific industry data and operational metrics to ensure the final report reflects the true market value of your business."
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
                            <h1 className="wp-block-heading" style={{ fontSize: '48px', color: '#000000', fontWeight: '700', lineHeight: '1.2' }}>
                                Business <strong>Valuations</strong>
                            </h1>
                            <p style={{ fontSize: '20px', color: '#444', maxWidth: '850px', margin: '25px 0', lineHeight: '1.6', fontWeight: '400' }}>
                                Accurate appraisals and deep financial insights to help you understand the true value of your business.
                            </p>
                            <div className="wp-block-buttons">
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
                                <i className="fa-solid fa-chart-pie main-decorated-icon"></i>
                                <i className="fa-solid fa-scale-balanced sub-icon sub-icon-1"></i>
                                <i className="fa-solid fa-piggy-bank sub-icon sub-icon-2"></i>
                                <i className="fa-solid fa-vault sub-icon sub-icon-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 1: Faster and More Accurate (Overlapping) */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* Image Column */}
                        <div style={{ flex: '40%', zIndex: 2 }}>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" alt="Precision Financial Analysis" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
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
                                Business Valuation – <strong>Faster and More Accurate With ZN Tax and Accounting Services</strong>
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    Are you concerned about receiving an inaccurate valuation? Are you worried that the expert you choose to work with won't manage the nuance of your industry? When selling, buying, doing taxes, or otherwise managing a business, knowing your business's value is essential to making the correct decisions. The ZN Tax and Accounting Services team can provide you with the quick and accurate small business evaluation services you need.
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    Our team has provided countless business owners with improved opportunities and informed decisions by offering them business appraisal services that provide unique insights into their financial situations. We will give you a high-level perspective on your business, allowing you to move forward with more confidence as you understand the financial implications of your decisions like never before.
                                </p>
                            </div>
                            <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#FF8C42', padding: '12px 35px', marginTop: '10px' }}>
                                Consult With ZN Tax and Accounting Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: When Will You Need Services? */}
            <div className="section-padding bg-light" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '60px', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                When Will You Need <strong>Business Valuation Services?</strong>
                            </h2>
                            <p style={{ fontSize: '15px', color: '#555', marginBottom: '25px', lineHeight: '1.7' }}>
                                How often do you think about the value of your business? You might consider it often, but knowing the exact dollar amount may become a necessity when:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                                {needReasons.map((reason, i) => (
                                    <li key={i} style={{
                                        marginBottom: '8px',
                                        padding: '15px 20px',
                                        background: '#fff',
                                        borderRadius: '2px',
                                        fontSize: '14.5px',
                                        color: '#444',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                                    }}>
                                        {reason} <i className="fa-solid fa-plus" style={{ color: '#FF8C42', fontSize: '12px' }}></i>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ paddingTop: '20px' }}>
                            <p style={{ fontSize: '14.5px', color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                                This is just a sampling of the many ways small business valuation services can give you the invaluable insights you need. They will protect you from being taken advantage of, stop you from leaving money on the table, and help to set you up for future success.
                            </p>
                            <p style={{ fontSize: '14.5px', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                                And beyond the confidence you can enjoy when making financial and business decisions, you can also enjoy more peace of mind when tax season rolls around. From the IRS to the SEC, numerous regulatory bodies require assessments and business valuations.
                            </p>

                            {/* Red Box CTA */}
                            <div style={{ borderLeft: '6px solid #FF8C42', background: '#fff', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '25px' }}>
                                    Let's talk about how business evaluation services from ZN Tax and Accounting Services can help you.
                                </p>
                                <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ background: '#FF8C42', padding: '15px 40px', width: '100%', textAlign: 'center' }}>
                                    Book A Valuation Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: Methods We Use (Image Left, Text Right) */}
            <div className="section-padding bg-white" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <img src={Valuation} alt="Valuation Methodologies" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#333' }}>
                                The Methods We Use for <strong>Small Business Appraisals</strong>
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                                <p style={{ marginBottom: '15px' }}>Business valuation is a comprehensive process that requires thorough research, industry expertise, and meticulous attention to detail. Your valuation with the professionals at ZN Tax and Accounting Services will involve methods including the Market Approach, Income Approach, and Asset Approach.</p>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '12px' }}><strong>• Market Approach:</strong> Compares the company to other similar businesses that have sold and uses those valuations to guide the assessment.</li>
                                    <li style={{ marginBottom: '12px' }}><strong>• Income Approach:</strong> Calculates your business's value based on the income the business is expected to generate over a certain time.</li>
                                    <li style={{ marginBottom: '12px' }}><strong>• Asset Approach:</strong> Determines value based on the company's assets and subtracting liabilities.</li>
                                </ul>
                                <p>Each method can provide unique guidance based on how the valuation is broken down – for instance, an asset-based approach can help determine how a business could be equitably divided. In contrast, an income approach is often used when seeking investments. How will your company or the company you want to acquire be valued? <Link to="/contact" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Speak to a member of the ZN Tax and Accounting Services team</Link> to determine the best valuation method for your circumstances.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 4: FAQ */}
            <div className="section-padding bg-light" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '15px' }}>
                            Frequently Asked Questions <strong>About Small Business Valuation Services</strong>
                        </h2>
                        <p style={{ fontSize: '15.5px', color: '#666', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.6' }}>
                            When it’s time to hire an accountant to perform a business valuation, you're sure to have questions. You aren't alone in this, and we often field questions of all kinds. If you would like more information or don’t see your question addressed below, please contact us to schedule a consultation and receive the answers you need.
                        </p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <FAQ items={faqItems} />
                    </div>
                </div>
            </div>

            {/* SECTION 5: Blue Parallax (Much More) */}
            <div className="wp-block-cover alignfull has-parallax" style={{ color: '#fff', padding: '80px 0' }}>
                <div className="wp-block-cover__image-background has-parallax" style={{ backgroundImage: `url(${whiteBg})`, backgroundPosition: '50% 50%', filter: 'grayscale(1)' }}></div>
                <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#1F2937', opacity: 0.9, zIndex: 1 }}></span>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '300', marginBottom: '20px' }}>
                        ZN Tax and Accounting Services Offers <strong>Business Valuation Services</strong> and Much More
                    </h2>
                    <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '50px', opacity: 0.9 }}>
                        Valuations are just one of the functions performed by the accounting professionals at ZN Tax and Accounting Services. We also offer the following services to <Link to="/client-hub" style={{ color: '#ff7b7b', textDecoration: 'underline' }}>our clients</Link>:
                    </p>

                    <div className="service-grid-v2 center-last-item" style={{ marginTop: '40px', marginBottom: '60px' }}>
                        {[
                            { title: 'Bookkeeping', icon: 'fa-book-bookmark', link: '/bookkeeping' },
                            { title: 'Tax Preparation & Planning', icon: 'fa-file-invoice-dollar', link: '/tax' },
                            { title: 'Acquisitions & Startups', icon: 'fa-handshake', link: '/acquisitions' },
                            { title: 'Business Consulting', icon: 'fa-users-gear', link: '/consulting' },
                            { title: 'QuickBooks® Services', icon: 'fa-laptop-code', link: '/quickbooks' },
                            { title: 'BOI Reporting', icon: 'fa-shield-halved', link: '/coming-soon' }
                        ].map((s, i) => (
                            <div key={i} className="service-card-v2 animate-card revealed" style={{ opacity: 1, transform: 'none' }}>
                                <div className="icon-box-fa">
                                    <i className={`fa-solid ${s.icon}`}></i>
                                </div>
                                <div className="text-box">
                                    <h3 style={{ margin: 0 }}>{s.title}</h3>
                                    <Link to={s.link} style={{ color: '#1F2937', fontWeight: '600' }}>Learn More</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ background: '#FF8C42', padding: '12px 35px' }}>Find An Accountant</Link>
                            <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#FF8C42', padding: '12px 35px' }}>Find A Bookkeeper</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* FINAL SECTION: Appraisal Expertise */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '300', color: '#333', marginBottom: '25px' }}>
                        Trust the Experts for Your <strong>Small Business Appraisal Services</strong>
                    </h2>
                    <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '40px' }}>
                        <p style={{ marginBottom: '15px' }}>
                            Knowing the monetary value of the business you’re buying, selling, acquiring, or merging with will help increase your chances of success, regardless of your goal. At ZN Tax and Accounting Services, we want to help you make the most of every situation your business will face.
                        </p>
                        <p>
                            You can start by <Link to="/contact" style={{ color: '#FF8C42', textDecoration: 'underline' }}>contacting us</Link> to schedule a consultation. Alternatively, use the links below to find a professional you'd like to work with at our <Link to="/harrisburg" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Harrisburg</Link>, <Link to="/myerstown" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Myerstown</Link>, <Link to="/mechanicsburg" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Mechanicsburg</Link>, or <Link to="/lancaster" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Lancaster</Link> location.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ background: '#FF8C42', padding: '15px 50px' }}>Find An Accountant</Link>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{ background: '#FF8C42', padding: '15px 50px' }}>Find A Bookkeeper</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Valuations;


