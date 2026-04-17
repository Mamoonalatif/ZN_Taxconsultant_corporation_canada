import React, { useState } from 'react';

const GoogleReviews = () => {
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [reviewName, setReviewName] = useState('');
    const [reviewText, setReviewText] = useState('');

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        setReviewSubmitted(true);
        // Reset form after success
        setTimeout(() => {
            setIsReviewModalOpen(false);
            setReviewSubmitted(false);
            setReviewName('');
            setReviewText('');
        }, 3000);
    };

    return (
        <>
            {/* Google Reviews Section */}
            <div className="reviews-section alignfull">
                <div className="container">
                    <div className="reviews-container">
                        <div className="reviews-left">
                            <h2 className="reviews-title-main">
                                <span className="google-brand-white">
                                    <i className="fa-brands fa-google" aria-hidden="true"></i>
                                    <span>oogle</span>
                                </span>
                                <span className="reviews-title-sub">Reviews</span>
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
        </>
    );
};

export default GoogleReviews;

