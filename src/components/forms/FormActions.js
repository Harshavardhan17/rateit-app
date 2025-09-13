import React from 'react';

function FormActions({ onCancel, onSubmit }) {
    return (
        <div className="form-actions">
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onSubmit}>Save</button>
        </div>
    );
}

export default FormActions;
