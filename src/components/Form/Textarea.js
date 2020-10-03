import React from 'react';

export default function Textarea({ name, rows, label, ...rest }) {

    return (
        <div className="input-block">
            <textarea 
                id={name}
                name={name}
                rows={rows} 
                {...rest} 
            />

            <label htmlFor={name}>{label}</label>
        </div>
    );
}