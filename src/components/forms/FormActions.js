import React from 'react';
import PropTypes from "prop-types";

function FormActions({ onSubmit }) {
    return (
        <div className="form-actions">
            <button onClick={onSubmit}>Save</button>
        </div>
    );
}

FormActions.propTypes = {
    onSubmit: PropTypes.bool,
};

export default FormActions;
