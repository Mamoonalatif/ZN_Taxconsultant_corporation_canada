import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`wp-block-esab-accordion-child ${isOpen ? 'esab__active_accordion' : ''}`}>
            <div
                className="esab__head"
                role="button"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="esab__heading_txt">
                    <h3 className="esab__heading_tag">{question}</h3>
                </div>
                <div className="esab__icon">
                    {isOpen ? (
                        <div className="esab__expand">
                            <svg version="1.2" viewBox="0 0 24 24" width="24" height="24">
                                <path fill-rule="evenodd" d="m12 24c-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12 6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12zm6.7-12c0-0.5-0.4-0.9-0.9-0.9h-11.6c-0.5 0-0.9 0.4-0.9 0.9 0 0.5 0.4 0.9 0.9 0.9h11.6c0.5 0 0.9-0.4 0.9-0.9z"></path>
                            </svg>
                        </div>
                    ) : (
                        <div className="esab__collapse">
                            <svg version="1.2" viewBox="0 0 24 24" width="24" height="24">
                                <path fill-rule="evenodd" d="m12 24c-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12 6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12zm6.7-12c0-0.5-0.4-0.9-0.9-0.9h-4.9v-4.6c0-0.5-0.4-1-0.9-1-0.5 0-0.9 0.5-0.9 1v4.6h-4.9c-0.5 0-0.9 0.4-0.9 0.9 0 0.5 0.4 0.9 0.9 0.9h4.9v5.1c0 0.5 0.4 0.9 0.9 0.9 0.5 0 0.9-0.4 0.9-0.9v-5.1h4.9c0.5 0 0.9-0.4 0.9-0.9z"></path>
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {isOpen && (
                <div className="esab__body">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = ({ items }) => {
    return (
        <div className="wp-block-esab-accordion">
            <div className="esab__container">
                {items.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
