import React from 'react';

function FormTextarea({ label, value, onChange }) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <label>{label}:</label>
            <textarea
                placeholder={`Enter ${label.toLowerCase()}...`}
                value={value}
                onChange={e => onChange(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', height: '80px' }}
            />
        </div>
    );
}

export default FormTextarea;
