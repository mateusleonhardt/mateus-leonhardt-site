import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';
import Recaptcha from '../../components/Form/Recaptcha';

import './styles.css';

export default function Contact() {
    const formRef = useRef(null);

    async function handleSubmit(data, { reset }) {
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

            console.log(data)

            formRef.current.setErrors({});

            window.grecaptcha.reset();
            reset();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
        <>
            <Helmet>
                <title>Contato | Mateus Leonhardt</title>
                <meta name="keywords" content="mateus leonhardt, leonhardt, contato, fale conosco"/>
            </Helmet>

            <div id="contact">
                <section className="page-title">
                    <h2>Contato</h2>
                    <span>Contato</span>
                </section>
                <p>Deixe-me uma mensagem e em breve entrarei em contato!</p>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="user_name" label="Nome*" required />
                    <Input name="email" label="E-mail*" type="email" required />
                    <Textarea name="message" label="Mensagem*" rows="10" required />
                    <Recaptcha name="recaptcha" />

                    <button className="main-btn" type="submit">Enviar mensagem</button>
                </Form>
            </div>
        </>
    );
}