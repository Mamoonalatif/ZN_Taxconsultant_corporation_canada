import React, { useState } from 'react';

const reviews = [
    {
        name: "Sarah Mitchell",
        date: "March 2025",
        rating: 5,
        text: "ZN Tax and Accounting Services has been a game changer for our small business. Zulqarnain and his team are incredibly knowledgeable and responsive. They handled our corporate tax filing seamlessly and saved us a significant amount. Highly recommend!",
        avatar: "SM"
    },
    {
        name: "David Chen",
        date: "January 2025",
        rating: 5,
        text: "I've been using ZN Tax for the past two years and couldn't be happier. The team is professional, thorough, and always available to answer my questions. They truly understand the needs of small business owners. 5 stars without hesitation!",
        avatar: "DC"
    },
    {
        name: "Priya Sharma",
        date: "February 2025",
        rating: 5,
        text: "Excellent service from start to finish. The bookkeeping and tax preparation support they provided was outstanding. Usman was very thorough and explained everything clearly. I feel confident that my business finances are in great hands.",
        avatar: "PS"
    },
    {
        name: "Michael O'Brien",
        date: "April 2025",
        rating: 5,
        text: "I was referred to ZN Tax by a colleague and it was one of the best decisions I've made for my business. They set up my QuickBooks, organized my books, and filed my taxes all within a short timeline. Very professional team!",
        avatar: "MO"
    },
    {
        name: "Fatima Al-Hassan",
        date: "December 2024",
        rating: 5,
        text: "ZN Tax helped me navigate some complex tax planning for my professional corporation. Zulqarnain's expertise is top-notch and his advice saved me considerably. The entire process was smooth and stress-free. Thank you!",
        avatar: "FA"
    }
];

const StarRating = ({ rating }) => (
    <div style={{ color: '#fbbc04', fontSize: '18px', letterSpacing: '2px' }}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
);

const GoogleReviews = ({ showDetailed = false }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [reviewName, setReviewName] = useState('');
    const [reviewText, setReviewText] = useState('');

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        setReviewSubmitted(true);
        setTimeout(() => {
            setIsReviewModalOpen(false);
            setReviewSubmitted(false);
            setReviewName('');
            setReviewText('');
        }, 3000);
    };

    const prev = () => setActiveIndex(i => (i === 0 ? reviews.length - 1 : i - 1));
    const next = () => setActiveIndex(i => (i === reviews.length - 1 ? 0 : i + 1));

    const visibleReviews = [
        reviews[activeIndex],
        reviews[(activeIndex + 1) % reviews.length],
        reviews[(activeIndex + 2) % reviews.length],
    ];

    return (
        <>
            {showDetailed ? (
                /* Google Reviews Section with detailed list */
                <div className="reviews-section alignfull" style={{ background: '#f8f9fa', padding: '80px 0' }}>
                    <div className="container">
                        {/* Header */}
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                <svg width="32" height="32" viewBox="0 0 48 48" aria-label="Google">
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                                    <path fill="none" d="M0 0h48v48H0z"/>
                                </svg>
                                <h2 style={{ margin: 0, fontSize: '28px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Google Reviews
                                </h2>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px' }}>
                                <span style={{ color: '#fbbc04', fontSize: '24px', letterSpacing: '2px' }}>★★★★★</span>
                                <span style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>5.0</span>
                                <span style={{ fontSize: '14px', color: '#666' }}>· {reviews.length} reviews</span>
                            </div>
                            <p style={{ color: '#666', fontSize: '15px', margin: 0 }}>What our clients say about us</p>
                        </div>

                        {/* Reviews Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '24px',
                            marginBottom: '40px',
                            position: 'relative'
                        }} className="reviews-cards-grid">
                            {visibleReviews.map((review, i) => (
                                <div key={i} style={{
                                    background: '#ffffff',
                                    borderRadius: '12px',
                                    padding: '28px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    border: '1px solid #f0f0f0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                                }}>
                                    {/* Reviewer info */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #D32F2F, #3A3A3A)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            fontWeight: '700',
                                            fontSize: '14px',
                                            flexShrink: 0
                                        }}>
                                            {review.avatar}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '15px' }}>{review.name}</div>
                                            <div style={{ fontSize: '12px', color: '#999' }}>{review.date}</div>
                                        </div>
                                        <div style={{ marginLeft: 'auto' }}>
                                            <svg width="20" height="20" viewBox="0 0 48 48" aria-label="Google">
                                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <StarRating rating={review.rating} />

                                    {/* Review text */}
                                    <p style={{
                                        fontSize: '14px',
                                        color: '#444',
                                        lineHeight: '1.7',
                                        margin: 0,
                                        flex: 1
                                    }}>
                                        "{review.text}"
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Navigation + CTA */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <button
                                onClick={prev}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: '2px solid #D32F2F',
                                    background: 'transparent',
                                    color: '#D32F2F',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s ease'
                                }}
                                aria-label="Previous reviews"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>

                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                {reviews.map((_, i) => (
                                    <span
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        style={{
                                            width: i === activeIndex ? '24px' : '8px',
                                            height: '8px',
                                            borderRadius: '4px',
                                            background: i === activeIndex ? '#D32F2F' : '#ddd',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: '2px solid #D32F2F',
                                    background: 'transparent',
                                    color: '#D32F2F',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s ease'
                                }}
                                aria-label="Next reviews"
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>

                            <button
                                onClick={() => setIsReviewModalOpen(true)}
                                className="btn-review-google"
                                style={{ cursor: 'pointer', border: 'none', marginLeft: '20px' }}
                            >
                                Write A Review
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                /* Google Reviews Section - original empty/simple state */
                <div className="reviews-section alignfull">
                    <div className="container">
                        <div className="reviews-container">
                            <div className="reviews-left">
                                <h2 className="reviews-title-main">
                                    <span className="google-brand-white">
                                        <i className="fa-brands fa-google" aria-hidden="true"></i>
                                        <span>oogle</span>
                                    </span>
                                    <span className="reviews-title-sub">                Reviews</span>
                                </h2>
                                <div className="google-stars-main">★★★★★</div>
                            </div>
                            <div className="reviews-right">
                                <div className="reviews-empty-state">
                                    <p>We haven't received any reviews yet. <strong>Be the first to share your experience with us!</strong> Your feedback helps us grow and serve you better.</p>
                                    <button onClick={() => setIsReviewModalOpen(true)} className="btn-review-google" style={{ cursor: 'pointer', border: 'none' }}>
                                        Write A Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* REVIEW MODAL */}
            {isReviewModalOpen && (
                <div className="modal-overlay" onClick={() => setIsReviewModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsReviewModalOpen(false)}>&times;</button>
                        {!reviewSubmitted ? (
                            <form onSubmit={handleReviewSubmit}>
                                <h3>Share Your Experience</h3>
                                <div className="star-rating-form" style={{ color: '#ffc107', fontSize: '24px', marginBottom: '20px' }}>
                                    ★★★★★
                                </div>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={reviewName}
                                        onChange={(e) => setReviewName(e.target.value)}
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Your Review</label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        placeholder="How was your experience working with us?"
                                    ></textarea>
                                </div>
                                <button type="submit" className="wp-block-button__link" style={{ width: '100%', marginTop: '10px' }}>
                                    Submit Review
                                </button>
                            </form>
                        ) : (
                            <div className="success-message text-center" style={{ padding: '40px 0' }}>
                                <div style={{ fontSize: '60px', color: '#4CAF50', marginBottom: '20px' }}>
                                    <i className="fa-solid fa-circle-check"></i>
                                </div>
                                <h3 style={{ fontSize: '28px', color: '#3A3A3A' }}>Thank You!</h3>
                                <p style={{ fontSize: '18px', color: '#555' }}>Your review has been successfully submitted and will be visible on Google after moderation.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .reviews-cards-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .reviews-cards-grid > div:not(:first-child) {
                        display: none;
                    }
                }
                @media (min-width: 769px) and (max-width: 1024px) {
                    .reviews-cards-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                    .reviews-cards-grid > div:last-child {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
};

export default GoogleReviews;
