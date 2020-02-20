import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './styles.css';

function Contact() {
    const [user_name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [recaptcha, setRecaptcha] = useState('');
    const [errors, setErrors] = useState({});

    const site_key = "6LcNqtoUAAAAAKeLBEmYpOmGD1Xo7g_XwcIpFHbn";

    function onChangeRecaptcha(value) {
        setRecaptcha(value);
    }

    function handleValidation() {
        let isValid = true;
        let errors = {};


        if (!recaptcha) {
            isValid = false;
            errors["recaptcha"] = "Por favor, marque o reCAPTCHA";
        } else {
            errors["recaptcha"] = "";
        }
        
        setErrors(errors);
        return isValid;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (handleValidation()) {
            e.target.submit();
        }
    }

    return (
        <div id="contact">
            <section className="page-title">
                <h2>Contato</h2>
                <span>Contato</span>
            </section>
            <p>Deixe-me uma mensagem e em breve entrarei em contato!</p>
            <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <input 
                        name="user_name" 
                        id="user_name" 
                        required  
                        value={user_name}
                        onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="user_name">Nome*</label>
                    <span className="error">{errors.user_name}</span>
                </div>
                <div className="input-block">
                    <input 
                        type="email"
                        name="email" 
                        id="email" 
                        required  
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="email">E-mail*</label>
                    <span className="error">{errors.email}</span>
                </div>
                <div className="input-block">
                    <textarea 
                        name="message" 
                        id="message"
                        rows="10" 
                        required  
                        onChange={e => setMessage(e.target.value)} 
                        value={message}
                    />
                    <label htmlFor="message">Mensagem*</label>
                    <span className="error">{errors.message}</span>
                </div>

                <div className="recaptcha">
                    <ReCAPTCHA 
                        sitekey={site_key} 
                        onChange={onChangeRecaptcha} 
                    /> 
                    <span className="error">{errors.recaptcha}</span>
                </div>

                <button className="main-btn" type="submit">Enviar mensagem</button>
            </form>
        </div>
    );
}

export default Contact;