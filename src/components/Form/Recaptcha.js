import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Input({ name, ...rest }) {
    const site_key = "6LcNqtoUAAAAAKeLBEmYpOmGD1Xo7g_XwcIpFHbn";
    //const site_key = "6LfGyeYUAAAAAIeeVBQwqIgEuwAFNqsV95f6mL5V"; //Prod

    return (
        <div className="recaptcha">
            <ReCAPTCHA 
                sitekey={site_key} 
                { ...rest }
            /> 
        </div>        
    );
}