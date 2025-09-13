import React from "react";
import PropTypes from "prop-types";
import './CloseButton.css';

function CloseButton({ onClick }) {
    return (
        <button className="close-button" onClick={onClick} aria-label="Close">
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </button>
    );
}

CloseButton.propTypes = {
    onClick: PropTypes.func,
};


export default CloseButton;