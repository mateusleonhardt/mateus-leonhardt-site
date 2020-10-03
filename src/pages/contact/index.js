import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';
import Recaptcha from '../../components/Form/Recaptcha';

import "./styles.scss";

export default function Contact({ pageContext }) {
    function handleSubmit() {
        try{
            console.log("Sucesso!");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Layout context={pageContext} crumbLabel="Contato">
            <Helmet>
                <title>Contato | Mateus Leonhardt</title>
                <meta name="keywords" content="mateus leonhardt, leonhardt, contato, fale conosco"/>
            </Helmet>

            <div id="contact">
                <PageTitle title="Contato" />
                <p>Deixe-me uma mensagem e em breve entrarei em contato!</p>

                <form 
                    action="/success"
                    onSubmit={handleSubmit} 
                    name="contact" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field" 
                    method="POST"
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <Input name="user_name" label="Nome*" required />
                    <Input name="email" label="E-mail*" type="email" required />
                    <Textarea name="message" label="Mensagem*" rows="10" required />
                    <Recaptcha name="recaptcha" />

                    <button className="main-btn" type="submit">Enviar mensagem</button>
                </form>
            </div>
        </Layout>
    );
}