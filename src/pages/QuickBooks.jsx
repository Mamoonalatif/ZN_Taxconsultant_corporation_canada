import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';
import quickbooks from '../assets/images/quickbooks.png';

const QuickBooks = () => {
    const reasons = [
        {
            question: "1. Save Time on Bookkeeping",
            answer: "With QuickBooks® handling many of the heavy-lifting tasks, you'll spend less time on data entry and more time focus on growing your business."
        },
        {
            question: "2. Generate Reports with Ease",
            answer: "QuickBooks® allows you to generate essential financial reports like Profit & Loss statements and Balance Sheets with just a few clicks."
        },
        {
            question: "3. Grow Your Business",
            answer: "By having clear visibility into your finances, you can make informed decisions that drive growth and profitability."
        },
        {
            question: "4. Customize Your QuickBooks®",
            answer: "QuickBooks® can be tailored to fit your industry's specific needs, ensuring you track the metrics that matter most to you."
        },
        {
            question: "5. Rely on QuickBooks®",
            answer: "QuickBooks® is the gold standard for small business accounting, providing reliable and accurate financial management."
        },
        {
            question: "6. Reduce Errors",
            answer: "Automated sync with bank accounts and credit cards reduces manual entry errors and ensures your books are always up to date."
        },
        {
            question: "7. Get Paid Faster",
            answer: "Send professional invoices and track payments easily, helping you maintain a healthy cash flow."
        },
        {
            question: "8. Accept Credit Card Payments",
            answer: "QuickBooks® Payments allows your customers to pay you via credit card or bank transfer directly from their invoice."
        }
    ];

    return (
        <div className="quickbooks-page">
            {/* Hero Section - Styling from Careers page */}
            <div className="wp-block-cover alignfull is-light careers-hero" style={{
                minHeight: '350px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '60px',
                background: `#f5f7f8`,
                position: 'relative'
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
                <div className="wp-block-cover__inner-container container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ marginBottom: '40px' }}>
                        <img src={quickbooks}
                            alt="QuickBooks"
                            style={{ height: '50px', width: 'auto' }}
                        />
                    </div>
                    <h1 className="wp-block-heading" style={{ fontSize: '48px', color: '#000000ff', fontWeight: '300', lineHeight: '1.2' }}>
                        <strong>QuickBooks® Accounting Services</strong> in Ontario
                    </h1>
                    <p style={{ fontSize: '22px', color: '#666', maxWidth: '850px', margin: '25px 0', lineHeight: '1.5', fontWeight: '400' }}>
                        QuickBooks® is the Ideal Business Accounting Software for Small- to Mid-Sized Businesses — and it's Better with Support from the Pros.
                    </p>
                    <div className="wp-block-buttons" style={{ marginTop: '30px' }}>
                        <div className="wp-block-button">
                            <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                                background: '#FF8C42',
                                color: '#fff',
                                padding: '15px 40px',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }}>
                                Consult With ZN Tax and Accounting Services
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Decorative background element mirroring the image's grey angle */}
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
            </div>

            {/* Main Content Section */}
            <div className="section-padding bg-white">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '80px', alignItems: 'start' }}>
                        {/* Left Column */}
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '30px', color: '#1a1a1a' }}>
                                Eight Reasons to Choose <strong>QuickBooks® Services</strong> for Your Business
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.8' }}>
                                <p style={{ marginBottom: '20px' }}>
                                    Looking for QuickBooks® services that go beyond the basics? When you purchase QuickBooks® through ZN Tax and Accounting Services, you may be eligible for an exclusive monthly discount—but the advantages do not stop there. By combining our professional QuickBooks® setup services with top-tier online <Link to="/bookkeeping" style={{ color: '#FF8C42', textDecoration: 'underline' }}>bookkeeping services</Link>, we help you streamline your financial management and gain more control over your numbers.
                                </p>
                                <p style={{ marginBottom: '40px' }}>
                                    At ZN Tax and Accounting Services, we utilize your QuickBooks® account to deliver high-quality bookkeeping for QuickBooks® and <Link to="/tax" style={{ color: '#FF8C42', textDecoration: 'underline' }}>accounting services</Link>. Here are eight compelling benefits you’ll enjoy when we handle your books using QuickBooks® services:
                                </p>
                            </div>

                            <FAQ items={reasons} />
                        </div>

                        {/* Right Column - Sidebar */}
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <div style={{
                                background: '#f8f9fa',
                                padding: '40px',
                                borderLeft: '5px solid #FF8C42',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                borderRadius: '4px'
                            }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '300', marginBottom: '20px', lineHeight: '1.3' }}>
                                    You May Be Eligible for a <br /><strong>QuickBooks® Discount</strong>
                                </h3>
                                <p style={{ fontSize: '15px', color: '#444', marginBottom: '30px', lineHeight: '1.6' }}>
                                    You may qualify for a monthly discount when you choose ZN Tax and Accounting Services as your bookkeeping or accounting partner with QuickBooks® services. Get in touch with us to see if you qualify.
                                </p>
                                <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                                    background: '#FF8C42',
                                    color: '#fff',
                                    padding: '12px 30px',
                                    borderRadius: '50px',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    display: 'inline-block'
                                }}>
                                    Do I Qualify For A Discount?
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '80px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '40px' }}>
                        <p style={{ fontSize: '14px', color: '#333' }}>
                            Are you ready to experience all the benefits of QuickBooks® services? <Link to="/contact" style={{ color: '#FF8C42', fontWeight: 'bold', textDecoration: 'underline' }}>Contact ZN Tax and Accounting Services</Link> today to learn more.
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 4: What's Included */}
            <div className="section-padding" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '20px', color: '#333' }}>
                            What's Included with <strong>QuickBooks® Services</strong> from ZN Tax and Accounting Services
                        </h2>
                        <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
                            <p style={{ marginBottom: '15px' }}>When you choose ZN Tax and Accounting Services for your QuickBooks® services, you're getting more than just software support—you're gaining a trusted financial partner. Whether you need bookkeeping for QuickBooks® or full QuickBooks® accounting services, we tailor our approach to match your unique business needs.</p>
                            <p>Here's what's included in our QuickBooks® bookkeeping services and QuickBooks® accounting support:</p>
                        </div>

                        <FAQ items={[
                            {
                                question: "QuickBooks® Setup",
                                answer: "We'll help you get started with the right version of QuickBooks® and ensure your chart of accounts and initial settings are perfectly configured for your business."
                            },
                            {
                                question: "QuickBooks® Training",
                                answer: "Our ProAdvisors provide personalized training for you and your staff so you can master the software and avoid common pitfalls."
                            },
                            {
                                question: "QuickBooks® Cleanup",
                                answer: "If your books have fallen behind or contain errors, we'll perform a deep dive to reconcile accounts and get everything back on track."
                            },
                            {
                                question: "QuickAnswers",
                                answer: "Have a quick question while working in your books? Our team is just a phone call or email away to provide the support you need."
                            }
                        ]} />
                    </div>
                </div>
            </div>

            {/* SECTION 5: Why Choose Us */}
            <div className="section-padding bg-white" style={{
                position: 'relative',
                backgroundImage: `url(${whiteBg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div
                    className="wp-block-cover__background"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1
                    }}
                ></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', color: '#1a1a1a' }}>
                            Why Choose Us: <strong>The ZN Tax and Accounting Services Advantage</strong>
                        </h2>
                        <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', textAlign: 'left' }}>
                            <p style={{ marginBottom: '20px' }}>When you partner with ZN Tax and Accounting Services for your QuickBooks services, you’re gaining more than technical support—you’re gaining a team of trusted advisors who understand small business.</p>
                            <p style={{ marginBottom: '25px' }}>Here's why clients across industries trust us:</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    { title: 'Certified Expertise', text: 'Our team includes Certified QuickBooks ProAdvisors and seasoned accountants who deliver comprehensive, compliant service.' },
                                    { title: 'Tailored Solutions', text: 'We understand no two businesses are the same. From QuickBooks setup to ongoing online bookkeeping services, everything we offer is customized to meet your needs.' },
                                    { title: 'Responsive Support', text: 'Whether you need help troubleshooting or have a strategic question, you’ll hear back from us fast—usually within 24 hours.' },
                                    { title: 'Proven Processes', text: 'We use tried-and-true workflows that save you time, reduce errors, and keep your books tax-ready year-round.' },
                                    { title: 'Long-Term Partnership', text: 'We’re not here for a one-time fix—we’re here to help your business grow.' }
                                ].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '15px', display: 'flex', gap: '10px', fontSize: '12px' }}>
                                        <span style={{ color: '#FF8C42', fontWeight: 'bold' }}>•</span>
                                        <span><strong>{item.title}:</strong> {item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ marginTop: '30px', fontStyle: 'italic' }}>Let ZN Tax and Accounting Services show you how smart bookkeeping for QuickBooks can free up your time, simplify your finances, and give you peace of mind.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 6: Need QuickBooks? Check with us first */}
            <div className="section-padding bg-light" style={{ backgroundColor: '#f1f1f1' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '30px', fontWeight: '300', marginBottom: '30px', color: '#333', lineHeight: '1.2' }}>
                            Need QuickBooks® Services? <strong>Check with ZN Tax and Accounting Services First</strong>
                        </h2>
                        <div style={{ fontSize: '15px', color: '#444', lineHeight: '1.7', marginBottom: '40px' }}>
                            <p style={{ marginBottom: '20px' }}>Before you make a QuickBooks® purchase, contact ZN Tax and Accounting Services to see what type of discount we might be able to arrange for you. Be sure to ask about how our QuickBooks® bookkeeping services and QuickBooks® accounting services can make your business more efficient.</p>
                            <p style={{ fontWeight: '600' }}>We have a member of <Link to="/contact" style={{ color: '#FF8C42', textDecoration: 'underline' }}>the ZN Tax and Accounting Services team</Link> ready to speak to you.</p>
                        </div>
                        <Link className="wp-block-button__link wp-element-button" to="/contact" style={{
                            background: '#FF8C42',
                            color: '#fff',
                            padding: '15px 40px',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            display: 'inline-block'
                        }}>
                            Consult With ZN Tax and Accounting Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickBooks;

