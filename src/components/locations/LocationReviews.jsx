import React, { useState, useRef } from 'react';

const LocationReviews = ({ locationName }) => {
    const trackRef = useRef(null);
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

    const handleScroll = (direction) => {
        if (trackRef.current) {
            const cardWidth = trackRef.current.offsetWidth / 2;
            const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
            trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            const newIndex = direction === 'next' ? Math.min(activeIndex + 1, 3) : Math.max(activeIndex - 1, 0);
            setActiveIndex(newIndex);
        }
    };

    const reviews = [
        {
            name: 'HELENA L. BOWES',
            content: 'After relocating to Harrisburg I had the good luck to find ZN Tax and Accounting Services. They are very professional and prompt with their follow through and knowledgeable with the Tax Code.',
            initial: 'H'
        },
        {
            name: 'TIM BARGER',
            content: 'I have had the pleasure of working with Diana from ZN Tax and Accounting Services for our payroll needs for the past 5 years, and I am extremely satisfied with her exceptional service and expertise. Diana\'s dedication and knowledge in handling our payroll processes have been invaluable. She consistently demonstrates professionalism and attention to detail, ensuring that our... read more',
            initial: 'T'
        }
    ];

    return (
        <div className="location-reviews-section alignfull">
            <div className="container">
                <div className="reviews-flex-container">
                    {/* Left side summary */}
                    <div className="reviews-summary-side">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="google-logo-main" />
                        <h2 className="reviews-title">Reviews <span className="stars-orange">★★★★★</span></h2>

                        <div className="rating-score-box">
                            <div className="score-value">0.0</div>
                            <div className="score-stars">
                                <span className="stars-orange">☆☆☆☆☆</span>
                                <div className="score-count">No User Reviews Yet</div>
                            </div>
                        </div>

                        <button onClick={() => setIsReviewModalOpen(true)} className="write-review-btn" style={{ cursor: 'pointer', border: 'none', textAlign: 'center' }}>
                            Write a Google Review for Our {locationName} Team!
                        </button>
                    </div>

                    {/* Right side empty state */}
                    <div className="reviews-slider-side" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="reviews-empty-state" style={{ paddingLeft: 0, textAlign: 'center' }}>
                            <p style={{ fontSize: '20px' }}>We haven't received any reviews yet. <strong>Be the first to share your experience with us!</strong></p>
                        </div>
                    </div>
                </div>
            </div>

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
                                <h3 style={{ fontSize: '28px', color: '#1F2937' }}>Thank You!</h3>
                                <p style={{ fontSize: '18px', color: '#555' }}>Your review has been successfully submitted and will be visible on Google after moderation.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocationReviews;

