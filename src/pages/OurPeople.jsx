import React from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../assets/images/white-bg.jpg';

const OurPeople = () => {
    const leadership = [
        {
            name: "Zulqarnain Nasir",
            title: "CPA, Principal",
            bio: "Zulqarnain leads ZN Tax and Accounting Services with a commitment to integrity and strategic excellence. His focus is on client service excellence, integrity, and long-term value creation. Zulqarnain is a CPA in the state of Pennsylvania as well  and operates a tax service there too. Over his career has  served as senior accountant for the State and is the go-to guy for US tax advice. He specializes in complex tax planning for SMEs, professional corporations of doctors and dentists and revenue optimization.",
            icon: "fa-user-tie"
        },
        {
            name: "Usman Yousaf",
            title: "Manager",
            bio: "An accountant by profession, Usman has served in many roles over his career of 2 decades. He has worked in the big three banks of the country, as well as multinational corporations like Telenor, the telecom giant of Norway. Usman has certification in risk management and compliance. Usman brings a wealth of experience to the practice and leads the firm's day to day operations.",
            icon: "fa-briefcase"
        },
        {

            name: "Our Professional Team",
            title: "Accounting & Tax Experts",
            bio: "Beyond leadership, ZN Tax and Accounting Services is powered by a dedicated team of CPAs, bookkeepers, and advisors. Every member of our staff is committed to your success and provides top-tier accounting solutions.",
            icon: "fa-users"
        }
    ];

    const values = [
        { title: "Honesty", text: "We believe in transparent communication, even when conversations are difficult.", icon: "fa-handshake" },
        { title: "Humility", text: "We are lifelong learners who value our clients' input and our team's advice.", icon: "fa-heart" },
        { title: "Dependability", text: "We are responsive, organized, and consistent in everything we do.", icon: "fa-clock" }
    ];

    return (
        <div className="our-people-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light" style={{
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
                paddingBottom: '40px',
                background: `#f5f7f8`,
                position: 'relative',
                overflow: 'hidden'
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
                    <h1 className="wp-block-heading" style={{ fontSize: '40px', color: '#000', fontWeight: '300', lineHeight: '1.2' }}>
                        Our <strong>People</strong>
                    </h1>
                    <p style={{ fontSize: '22px', color: '#444', maxWidth: '900px', margin: '25px 0', lineHeight: '1.7', fontWeight: '400' }}>
                        Meet the Experts Dedicated to Your Success
                    </p>
                </div>
            </div>

            {/* SECTION 1: Leadership & Team */}
            <div className="section-padding bg-white" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '300', color: '#333' }}>
                            Dedicated to <strong>Excellence</strong>
                        </h2>
                        <p style={{ fontSize: '16px', color: '#666', marginTop: '15px' }}>
                            Our team combines deep expertise with a passion for helping small businesses thrive.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                        {leadership.map((person, i) => (
                            <div key={i} className="wp-block-post" style={{ padding: '40px', textAlign: 'left', border: 'none', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
                                {person.image ? (
                                    <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch', flexWrap: 'wrap' }}>
                                        <div style={{ flex: '0 0 220px', maxWidth: '220px' }}>
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    minHeight: '260px',
                                                    objectFit: 'cover',
                                                    borderRadius: '10px'
                                                }}
                                            />
                                        </div>
                                        <div style={{ flex: '1 1 280px', minWidth: '0' }}>
                                            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#FF8C42', textDecoration: 'none', borderBottom: 'none', marginTop: '0' }}>{person.name}</h3>
                                            <div style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', color: '#666', margin: '10px 0 20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>{person.title}</div>
                                            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>{person.bio}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: '#0F1925',
                                            color: '#fff',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '35px',
                                            marginBottom: '25px'
                                        }}>
                                            <i className={`fa-solid ${person.icon}`}></i>
                                        </div>
                                        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#FF8C42', textDecoration: 'none', borderBottom: 'none' }}>{person.name}</h3>
                                        <div style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', color: '#666', margin: '10px 0 20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>{person.title}</div>
                                        <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>{person.bio}</p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 2: Our Core Values (Themed like Careers Page) */}
            <div className="section-padding" style={{ background: '#f8f9fa', padding: '100px 0' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '300' }}>Our <strong>Core Values</strong></h2>
                    </div>
                    <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                        {values.map((v, i) => (
                            <div key={i} className="value-item" style={{ background: '#fff', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                                <i className={`fa-solid ${v.icon}`} style={{ fontSize: '40px', color: '#FF8C42', marginBottom: '20px' }}></i>
                                <h3 style={{ color: '#1F2937', marginBottom: '15px', fontSize: '22px' }}>{v.title}</h3>
                                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 3: Join Our Team CTA */}
            <div className="section-padding bg-white" style={{ padding: '100px 0' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '36px', fontWeight: '300', marginBottom: '25px' }}>
                        Interested in <strong>Joining Us?</strong>
                    </h2>
                    <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
                        We're always looking for talented professionals who share our values and our commitment to client success.
                    </p>
                    <Link className="wp-block-button__link wp-element-button" to="/careers" style={{ background: '#FF8C42', padding: '15px 45px' }}>
                        View Career Opportunities
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurPeople;


