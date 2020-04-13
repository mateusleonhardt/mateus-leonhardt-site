import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({ name, label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error} = useField(name);

    useEffect(() => {
       registerField({
           name: fieldName,
           ref: inputRef.current,
           path: 'value'
       }) 
    }, [fieldName, registerField]);

    return (
        <div className="input-block">
            <input 
                id={fieldName}
                name={fieldName} 
                ref={inputRef} 
                defaultValue={defaultValue}
                {...rest} 
            />

            <label htmlFor={fieldName}>{label}</label>

            { error && <span className="error">{error}</span>}
        </div>
    );
}