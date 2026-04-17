import React from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../assets/images/white-bg.jpg';

const Blogs = () => {
    const posts = [
        { title: "5 Tax Planning Strategies for 2024", date: "Jan 15, 2024", category: "Tax Planning" },
        { title: "Understanding fractional CFO services", date: "Feb 02, 2024", category: "Business Consulting" },
        { title: "How to simplify your monthly bookkeeping", date: "Mar 10, 2024", category: "Bookkeeping" }
    ];

    return (
        <div className="resources-page blog-page">
            {/* Hero Section */}
            <div className="wp-block-cover alignfull is-light" style={{
                minHeight: '250px',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '60px',
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
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ fontSize: '40px', fontWeight: '300' }}>Our <strong>Blog</strong></h1>
                    <p style={{ fontSize: '20px', color: '#555', marginTop: '15px' }}>Insights, News, and Advice from ZN Tax and Accounting Services</p>
                </div>
            </div>

            {/* SECTION: Post Grid */}
            <div className="section-padding bg-white">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                        {posts.map((post, i) => (
                            <div key={i} style={{
                                border: '1px solid #eee',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                                background: '#fff'
                            }}>
                                <div style={{ height: '200px', background: '#e9ecef', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#FF8C42', color: '#fff', padding: '5px 12px', fontSize: '12px', fontWeight: '700', borderRadius: '2px' }}>
                                        {post.category}
                                    </div>
                                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', opacity: 0.1 }}>
                                        <i className="fa-solid fa-newspaper" style={{ fontSize: '80px' }}></i>
                                    </div>
                                </div>
                                <div style={{ padding: '25px' }}>
                                    <div style={{ fontSize: '12px', color: '#999', marginBottom: '10px' }}>{post.date}</div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1F2937', marginBottom: '15px', lineHeight: '1.4' }}>{post.title}</h3>
                                    <Link to={`/blog/${i}`} style={{ color: '#FF8C42', fontWeight: '700', textDecoration: 'underline', fontSize: '14px' }}>Read More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;


