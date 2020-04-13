import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';
import Recaptcha from '../../components/Form/Recaptcha';

import "./styles.scss";

export default function Contact({ pageContext }) {
    const formRef = useRef(null);

    async function handleSubmit(data) {
        try{
            const schema = Yup.object().shape({
                user_name: Yup.string()
                    .required('Por favor, insira um nome'),
                email: Yup.string()
                    .email('Por favor, insira um e-mail válido')
                    .required('Por favor, insira um e-mail'),
                message: Yup.string()
                    .required('Por favor, insira uma mensagem'),
                recaptcha: Yup.string()
                    .required('Por favor, marque o reCAPTCHA')
                    .nullable()
            });

            await schema.validate(data, {
                abortEarly: false,
            })

            formRef.current.setErrors({});
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
            }

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

                <Form ref={formRef} 
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
                </Form>
            </div>
        </Layout>
    );
}