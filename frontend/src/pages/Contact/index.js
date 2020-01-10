import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

import './styles.css';

class Contact extends Component {
     render() {
         return (
             <div id="contact">
                <h2>Contato</h2>
                <p>Deixe-me uma mensagem e em breve entrarei em contato!</p>
                <form>
                    <TextField required label="Nome" variant="outlined" fullWidth/>
                    <TextField required label="E-mail" variant="outlined" fullWidth/>
                    <TextField
                        required
                        label="Mensagem"
                        multiline
                        variant="outlined"
                        rows="4"
                        fullWidth
                    />
                    <Button variant="contained">Enviar mensagem</Button>
                </form>
             </div>
         );
     }
}

export default Contact;