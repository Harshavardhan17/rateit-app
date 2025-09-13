import React from 'react';
import './ReviewCard.css';
import StarIcon from "./StarIcon";
import PropTypes from "prop-types";

function ReviewCard({review, onEdit}) {

    const stars = Array.from(
        {length: 5}, (_, i) => (
            <StarIcon key={i} filled={i < Number(review.rating)}/>
        )
    );

    return (
        <div className="review-card">
            <h3 className="review-title">{review.title}</h3>
            <p className="review-description">{review.description}</p>
            <div className="review-rating">{stars}</div>
            <div className="review-actions">
                <button onClick={() => onEdit(review)}>Edit</button>
            </div>
        </div>
    );
}

ReviewCard.propTypes = {
    review: PropTypes.string,
    onEdit: PropTypes.bool
};


export default ReviewCard;
