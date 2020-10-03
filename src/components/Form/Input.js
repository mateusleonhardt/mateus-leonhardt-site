import React from 'react';

export default function Input({ name, label, ...rest }) {
    return (
        <div className="input-block">
            <input 
                id={name}
                name={name} 
                {...rest} 
            />

            <label htmlFor={name}>{label}</label>
        </div>
    );
}