import React from 'react';
import PropTypes from "prop-types";

function FormSelect({label, value, onChange}) {
    return (
        <div className="form-group">
            <label>{label}:</label>
            <select value={value} onChange={e => onChange(Number(e.target.value))}>
                <option value={1}>1 - Poor</option>
                <option value={2}>2 - Fair</option>
                <option value={3}>3 - Good</option>
                <option value={4}>4 - Very Good</option>
                <option value={5}>5 - Excellent</option>
            </select>
        </div>
    );
}

FormSelect.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func,
};


export default FormSelect;
