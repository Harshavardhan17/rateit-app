import React from 'react';
import './ReviewCard.css';

function ReviewCard({ review }) {
    return (
        <div className="review-card">
            <h3 className="review-title">{review.title}</h3>
            <p className="review-description">{review.description}</p>
            <p className="review-rating">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </p>
        </div>
    );
}

export default ReviewCard;
