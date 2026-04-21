import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';
import blueBg from '../assets/images/blue-bg.jpg';


const Bookkeeping = () => {
    const faqItems = [
        {
            question: "What is a Fractional Bookkeeper?",
            answer: "A fractional bookkeeper will provide bookkeeping services to your small business or nonprofit on a part-time basis, saving you from having to hire a full-time bookkeeper. This is a cost-effective method used by many businesses."
        },
        {
            question: "Why Should a Small Business Outsource Bookkeeping?",
            answer: "When you spend your precious time plugging away at tasks that could be handled by someone else, you lose time that could be spent doing what you love and are an expert at. For small business owners who feel like they are wasting time attempting to handle their own bookkeeping, an outsourced bookkeeper may be the right option."
        },
        {
            question: "What Services Does a Fractional Bookkeeper Perform?",
            answer: "Fractional bookkeepers offer a range of services, including but not limited to recording financial transactions, managing accounts payable and accounts receivable, reconciling bank statements, preparing financial statements, generating reports for tax purposes, and providing financial analysis."
        },
        {
            question: "What Qualifications Should I Look for in a Bookkeeper?",
            answer: "Ideally, you’ll want to hire a fractional bookkeeper who has relevant education and certifications, as well as practical experience working with businesses similar to yours. Look for candidates with a track record of reliability, accuracy, and attention to detail—and consider asking for references or examples of their work."
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
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h1 style={{ fontSize: '48px', color: '#000', fontWeight: '700', lineHeight: '1.1', marginTop: '0', marginBottom: '15px' }}>
                                Outsourced <br /><strong>Bookkeeping Services</strong>
                            </h1>
                            <p style={{ fontSize: '20px', color: '#555', fontWeight: '400', marginBottom: '35px', maxWidth: '600px', lineHeight: '1.6' }}>
                                Precision financial records managed by experts, giving you the freedom to focus on your vision.
                            </p>
                            <div className="wp-block-buttons">
                                <button
                                    className="wp-block-button__link wp-element-button"
                                    onClick={() => {
                                        const footerForm = document.querySelector('.newsletter-form');
                                        if (footerForm) footerForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
                                    style={{
                                        background: '#FF8C42',
                                        padding: '15px 40px',
                                        borderRadius: '30px',
                                        boxShadow: '0 10px 20px rgba(255, 140, 66, 0.2)',
                                        border: 'none',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}
                                >Get Started Today</button>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 300px' }}>
                            <div className="floating-icon-stack">
                                <div className="icon-blob"></div>
                                <i className="fa-solid fa-file-invoice main-decorated-icon"></i>
                                <i className="fa-solid fa-calculator sub-icon sub-icon-1"></i>
                                <i className="fa-solid fa-magnifying-glass-chart sub-icon sub-icon-2"></i>
                                <i className="fa-solid fa-receipt sub-icon sub-icon-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 1: What Will a Bookkeeper Do? */}
            <div className="section-padding" style={{ position: 'relative', overflow: 'hidden', paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#1F2937' }}>
                <div className="container">
                    <div className="bookkeeping-intro-grid" style={{ display: 'flex', alignItems: 'center', position: 'relative', gap: '30px', flexWrap: 'wrap' }}>
                        {/* Image Column */}
                        <div style={{ flex: '1 1 400px', zIndex: 2 }}>
                            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop" alt="Outsourced Bookkeeping" style={{ width: '100%', borderRadius: '15px', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
                        </div>

                        {/* Overlapping Text Card */}
                        <div className="process-floating-card glass-card-dark" style={{
                            flex: '1 1 500px',
                            padding: '60px',
                            zIndex: 1,
                            borderRadius: '30px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#fff'
                        }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#fff' }}>
                                What Will <strong>a Bookkeeper</strong> Do for <br />Your Small Business?
                            </h2>
                            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.7' }}>
                                <p style={{ marginBottom: '15px' }}>Are your books suffering because your staff is too busy? The ledger is often the last item to get attention when things get busy.</p>
                                <p style={{ marginBottom: '15px' }}>What separates average from great is recognizing the need for help.</p>
                                <p style={{ marginBottom: '30px' }}>
                                    It's time to <Link to="/contact" style={{ color: '#FF8C42', textDecoration: 'underline', fontWeight: '600' }}>hire a fractional bookkeeper</Link> to help you get back on track.
                                </p>
                            </div>
                            <div>
                                <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                                    background: '#FF8C42',
                                    color: '#fff',
                                    padding: '12px 35px',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    display: 'inline-block'
                                }}>
                                    Find A Bookkeeper
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: What is a Fractional Bookkeeper? */}
            <div className="section-padding bg-light" style={{ backgroundColor: '#eeeeee ' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'start' }}>
                        {/* Left Column */}
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '300', marginBottom: '40px', lineHeight: '1.2' }}>
                                What is a <br /><strong>Fractional Bookkeeper?</strong>
                            </h2>
                            <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#444' }}>
                                <p style={{ marginBottom: '25px' }}>A fractional bookkeeper is a professional who provides bookkeeping services to businesses on a part-time basis. Instead of being a full-time employee of a single company, they typically work with multiple clients, allocating a portion of their time to each client's accounting needs.</p>
                                <p style={{ marginBottom: '25px' }}>Businesses, particularly SMEs, opt for fractional bookkeeping services to save costs. These services can represent significant savings compared to having a full-time, in-house bookkeeper. These outsourced bookkeepers offer expertise in various accounting software, handle day-to-day financial transactions, reconcile accounts, prepare financial statements, and provide insights into the business's financial health.</p>
                                <p>Fractional bookkeeping arrangements allow businesses to access professional services without the commitment and expense of hiring a full-time employee. This flexible solution can adapt to the business's changing needs, scaling up or down as needed.</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#555', fontStyle: 'italic' }}>
                                A fractional bookkeeper gives you the flexibility of having a professional at your service without the overhead of a full-time staff member.
                            </p>
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Strategic Bookkeeping Illustration" style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                            <div className="glass-card-dark" style={{ padding: '30px', margin: 0, background: 'rgba(31, 41, 55, 0.05)', border: '1px solid rgba(31, 41, 55, 0.1)' }}>
                                <h4 style={{ color: '#1F2937', marginBottom: '10px' }}>Strategic Growth</h4>
                                <p style={{ fontSize: '14px', margin: 0 }}>Our bookkeeping doesn't just record the past, it helps you plan for the future with "Strategic Bookkeeping" insights.</p>
                            </div>
                        </div>
                    </div>

                    {/* Notice Box */}
                    <div style={{
                        marginTop: '60px',
                        background: '#f1f1f1',
                        padding: '40px 50px',
                        borderLeft: '5px solid #FF8C42',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <p style={{ margin: 0, fontSize: '18px', fontWeight: '500', color: '#1a1a1a' }}>
                            Are you ready to see what a fractional bookkeeper could do for your business? A member of the ZN Tax and Accounting Services team is ready to discuss it with you.
                        </p>
                        <div>
                            <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                                background: '#FF8C42',
                                color: '#fff',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                display: 'inline-block'
                            }}>
                                Contact ZN Tax and Accounting Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: Service Plans & Difference */}
            <div className="section-padding bookkeeping-services-section" style={{
                position: 'relative',
                backgroundColor: '#1F2937',
                color: '#fff',
                paddingTop: '80px',
                paddingBottom: '80px'
            }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '60px', alignItems: 'start' }}>
                        {/* Left Column: Plans */}
                        <div>
                            <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '25px', lineHeight: '1.2', color: '#fff' }}>
                                Get Affordability & Predictability with <br />
                                <strong>Monthly Bookkeeping Service Plans</strong>
                            </h2>
                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.82)', lineHeight: '1.6' }}>
                                <p style={{ marginBottom: '20px' }}>As a small business owner, you know that unexpected costs can be the enemy of your budget. You also know that having your books in disarray is a situation that won’t end well.</p>
                                <p style={{ marginBottom: '20px' }}>You can solve both of these problems by paying one flat fee every month to have a professional bookkeeper at your service, performing the tasks you elect. These tasks may include:</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', columns: 1, gap: '20px' }}>
                                    {['Recording Transactions', 'Accounts Receivable', 'Accounts Payable', 'Bank Reconciliation', 'Expense Tracking', 'Financial Reporting', 'Payroll Processing', 'Tax Preparation Support', 'Financial Analysis', 'Budgeting & Forecasting', 'Compliance', 'Advisory Services'].map((task, i) => (
                                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#FF8C42' }}>•</span> {task}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ fontWeight: '500', color: '#fff' }}>
                                    <Link to="/contact" style={{ color: '#FF8C42', textDecoration: 'underline' }}>Get in touch with ZN Tax and Accounting Services</Link> today to see if our bookkeeping services for small businesses can help you take your company from great to outstanding!
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Difference Card */}
                        <div className="process-floating-card" style={{
                            background: 'rgba(255,255,255,0.96)',
                            padding: '20px 40px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                            borderRadius: '4px',
                            borderTop: '1px solid #eee'

                        }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '300', marginBottom: '25px', color: '#1F2937' }}>
                                Experience the ZN Tax and Accounting Services <strong>Difference</strong>
                            </h3>
                            <p style={{ fontSize: '12px', color: '#666', marginBottom: '25px', lineHeight: '1.5' }}>
                                When you have a bookkeeping service designed specifically for small businesses (and even more specifically, for your business), your chances of success multiply. That's partially because your books will be accurate—but there's so much more.
                            </p>
                            <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '20px', color: '#1F2937' }}>
                                When you <span style={{ color: '#FF8C42', textDecoration: 'underline' }}>partner with ZN Tax and Accounting Services</span> for all your bookkeeping services, you'll get all these benefits:
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', fontSize: '12px' }}>
                                {[
                                    'A dedicated bookkeeper who knows your business',
                                    'Fixed monthly service plans for predictable, manageable expenses',
                                    'Tailored guidance and advice for addressing day-to-day business challenges',
                                    'Active search for progressive systems to increase efficiency and service to you',
                                    'Attention to your current stage of business, as well as your goals for the future',
                                    'Proactive bookkeeping management for greater visibility and superior planning',
                                    'The ability to anticipate financial needs before they\'re staring you in the face',
                                    'Controlled costs, thanks to not having to hire a full-time bookkeeper',
                                    'More time to focus on running and growing your business',
                                    'Compliance, which prevents costly fines, penalties, and legal trouble',
                                    'Smooth filing at tax time, with the possibility of reduced tax liabilities'
                                ].map((benefit, i) => (
                                    <li key={i} style={{ marginBottom: '10px', fontSize: '12px', color: '#444', display: 'flex', alignItems: 'start', gap: '10px' }}>
                                        <span style={{ color: '#FF8C42', fontWeight: 'bold' }}>✓</span> {benefit}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ background: '#FF8C42', borderLeft: '4px solid ', padding: '20px', marginBottom: '25px' }}>
                                <p style={{ fontSize: '12px', margin: 0, color: '#444', lineHeight: '1.5' }}>
                                    Isn't it time to have confidence in the accuracy of your financial records while saving time, money, and maybe even tax dollars? Today is the day to contact ZN Tax and Accounting Services to discuss how a fractional bookkeeper can help you.
                                </p>
                            </div>
                            <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                                background: '#FF8C42',
                                color: '#fff',
                                padding: '12px 35px',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                display: 'inline-block'
                            }}>
                                Contact ZN Tax and Accounting Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: Bookkeeping Services are Just the Beginning */}
            <div className="section-padding" style={{
                position: 'relative',
               backgroundColor: '#1F2937'
               
                ,color: '#fff',
                textAlign: 'center',
                padding: '80px 0'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '300', marginBottom: '20px' }}>
                        <strong>Bookkeeping Services</strong> are Just the Beginning at ZN Tax and Accounting Services
                    </h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px', fontSize: '16px', opacity: 0.9 }}>
                        You know that we offer comprehensive, customizable bookkeeping services for small businesses. But did you also know that we offer a variety of accounting services as well?
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
                        <Link className="wp-block-button__link" to="/contact" style={{ padding: '12px 35px', background: '#FF8C42', borderRadius: '50px', fontWeight: 'bold' }}>Find An Accountant</Link>
                        <Link className="wp-block-button__link" to="/about" style={{ padding: '12px 35px', background: '#FF8C42', borderRadius: '50px', fontWeight: 'bold' }}>See All Staff</Link>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="section-padding bg-light" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '20px', color: '#333' }}>
                            <strong>Frequently Asked Questions</strong> About Bookkeeping Services for Small Businesses
                        </h2>
                        <p style={{ color: '#777', marginBottom: '40px', fontSize: '15px' }}>
                            If you’re thinking about hiring a bookkeeper, you’re bound to have questions. We’re answering some of the most commonly asked ones here, and you’re encouraged to <Link to="/contact" style={{ color: '#FF8C42', textDecoration: 'underline' }}>contact us</Link> for answers to your specific questions.
                        </p>
                        <FAQ items={faqItems} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookkeeping;


