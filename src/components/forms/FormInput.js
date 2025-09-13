import React from 'react';

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

export default FormInput;
