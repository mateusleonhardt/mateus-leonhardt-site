import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error} = useField(name);
    const site_key = window.location.hostname.indexOf("localhost") != -1 
                        ? "6LcNqtoUAAAAAKeLBEmYpOmGD1Xo7g_XwcIpFHbn" 
                        : "6LfGyeYUAAAAAIeeVBQwqIgEuwAFNqsV95f6mL5V";
    
    useEffect(() => {
       registerField({
           name: fieldName,
           ref: inputRef.current,
           path: 'value'
       }) 
    }, [fieldName, registerField]);

    function onChangeRecaptcha(value) {
       inputRef.current.value = value;
    }

    return (
        <div className="recaptcha">
            <ReCAPTCHA 
                sitekey={site_key} 
                onChange={onChangeRecaptcha} 
                defaultValue={defaultValue}
                ref={inputRef}
                { ...rest }
            /> 

            { error && <span className="error">{error}</span>}
        </div>        
    );
}