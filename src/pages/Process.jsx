import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import whiteBg from '../assets/images/white-bg.jpg';

const Process = () => {
    const processSteps = [
        {
            question: "Step One: Schedule a Consultation",
            answer: "The first step is a simple conversation. We’ll discuss your business goals, current challenges, and how ZN Tax and Accounting Services can provide the support you need. This is a no-obligation opportunity for us to get to know each other."
        },
        {
            question: "Step Two: Review Financial Documents",
            answer: "To provide an accurate proposal, we’ll take a look at your current financial records. This allows us to understand the scope of work and identify areas where we can immediately add value or efficiency."
        },
        {
            question: "Step Three: Review the Services Proposal",
            answer: "Based on our discovery, we’ll present a tailored services proposal. This outlines exactly what we’ll do, how we’ll do it, and the flat monthly fee (if applicable) so you have complete predictability."
        },
        {
            question: "Step Four: You & Your Team Decide What's Best",
            answer: "We give you the space to review the proposal with your team. Once you're ready to move forward, we’ll begin our onboarding process to transition your bookkeeping or accounting smoothly."
        }
    ];

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
                        Hiring a Bookkeeper or Accountant is Easy <strong>with ZN Tax and Accounting Services</strong>
                    </h1>
                    <p style={{ fontSize: '22px', color: '#444', maxWidth: '850px', margin: '25px 0', lineHeight: '1.7', fontWeight: '400' }}>
                        You'll Never Have to Worry About the Process Being Difficult with ZN Tax and Accounting Services. We Make it Simple for You.
                    </p>
                    <div className="wp-block-buttons" style={{ marginTop: '30px' }}>
                        <a className="wp-block-button__link wp-element-button" href="/contact" style={{ background: '#FF8C42' }}>
                            Book A Consultation
                        </a>
                    </div>
                </div>
            </div>

            {/* SECTION 2: Hardest Part Trouble-Free (Image Left, Floating Text Right) */}
            <div className="section-padding bg-white" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* Image Column */}
                        {/* Image Column */}
                        <div style={{ flex: '40%', zIndex: 2 }}>
                            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" alt="Professional Workspace" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        {/* Floating Text Card */}
                        <div className="process-floating-card" style={{
                            flex: '65%',
                            background: '#fff',
                            padding: '60px 60px 60px 115px',
                            marginLeft: '-10%',
                            zIndex: 1,
                            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                            borderRadius: '4px'
                        }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '25px', lineHeight: '1.3' }}>
                                You Can Make the Hardest Part <br /><strong>Trouble-Free!</strong>
                            </h2>
                            <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.8', marginBottom: '30px' }}>
                                <p style={{ marginBottom: '15px' }}>
                                    What do you dread most about starting any new service? It's got to be the beginning, right? Change is hard—we understand—but we make the <Link to="/acquisitions" style={{ color: '#FF8C42', textDecoration: 'underline' }}>shift to a new fractional accounting service</Link> as easy as can be.
                                </p>
                            </div>
                            <a className="wp-block-button__link wp-element-button" href="/contact" style={{ background: '#FF8C42' }}>
                                Contact ZN Tax and Accounting Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: Our Process (Accordion/FAQ style) */}
            <div className="section-padding bg-light" style={{ padding: '60px 0', backgroundColor: '#e8e8e8' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '15px' }}>
                            Our <strong>Process</strong>
                        </h2>
                        <p style={{ fontSize: '15px', color: '#666', marginBottom: '40px' }}>
                            We're in this together, and we'll guide you through each step so there won't be any surprises.
                        </p>
                        <FAQ items={processSteps} />
                    </div>
                </div>
            </div>

            {/* SECTION 4: Let's Get Started */}
            <div className="section-padding bg-white" style={{
                padding: '80px 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative background angle */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '30%',
                    height: '100%',
                    background: '#f8f9fa',
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '300', marginBottom: '25px' }}>
                            Let's <strong>Get Started</strong>
                        </h2>
                        <div style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '35px' }}>
                            <p style={{ marginBottom: '15px' }}>
                                We've been helping businesses to be their best and achieve the most, and along with that experience comes the knowledge to make the process of hiring an accountant or bookkeeper uncomplicated.
                            </p>
                            <p style={{ fontWeight: '700', color: '#333' }}>
                                Let us handle all the details so you can get back to business.
                            </p>
                        </div>
                        <a className="wp-block-button__link wp-element-button" href="/schedule" style={{
                            background: '#FF8C42',
                            padding: '15px 45px',
                            fontSize: '16px'
                        }}>
                            Book A Meeting
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;

