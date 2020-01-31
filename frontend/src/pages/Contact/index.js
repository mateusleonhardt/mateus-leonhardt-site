import React, { useState } from 'react';

import './styles.css';

function Contact() {
    const [user_name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div id="contact">
            <h2>Contato</h2>
            <p>Deixe-me uma mensagem e em breve entrarei em contato!</p>
            <form>
                <label htmlFor="name">Nome</label>
                <input 
                    name="user_name" 
                    id="user_name" 
                    required  
                    value={user_name}
                    onChange={e => setUsername(e.target.value)} />

                <label htmlFor="email">E-mail</label>
                <input 
                    type="email"
                    name="email" 
                    id="email" 
                    required  
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                
                <label htmlFor="message">Mensagem</label>
                <textarea 
                    name="message" 
                    id="message"
                    rows="5" 
                    required  
                    onChange={e => setMessage(e.target.value)} 
                >
                    {message}
                </textarea>

                <button type="submit">Enviar mensagem</button>
            </form>
        </div>
    );
}

export default Contact;