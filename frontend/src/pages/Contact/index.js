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
                <div className="input-block">
                    <input 
                        name="user_name" 
                        id="user_name" 
                        required  
                        value={user_name}
                        onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="name">Nome</label>
                </div>
                <div className="input-block">
                    <input 
                        type="email"
                        name="email" 
                        id="email" 
                        required  
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="input-block">
                    
                    <textarea 
                        name="message" 
                        id="message"
                        rows="5" 
                        required  
                        onChange={e => setMessage(e.target.value)} 
                    >
                        {message}
                    </textarea>
                    <label htmlFor="message">Mensagem</label>
                </div>

                <button type="submit">Enviar mensagem</button>
            </form>
        </div>
    );
}

export default Contact;