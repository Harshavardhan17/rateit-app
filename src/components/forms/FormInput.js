import React from 'react';
import PropTypes from "prop-types";

function FormInput({ label, value, onChange }) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <label>{label}:</label>
            <input
                type="text"
                placeholder={`Enter ${label.toLowerCase()}...`}
                value={value}
                onChange={e => onChange(e.target.value)}
                style={{ width: '100%', padding: '0.5rem' }}
            />
        </div>
    );
}

FormInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};


export default FormInput;
