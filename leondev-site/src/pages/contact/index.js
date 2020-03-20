import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Recaptcha from '../../components/Form/Recaptcha';

import { ContactContainer, Form, InputForm, TextareaForm } from "./styles";

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
        <Layout>
            <Helmet>
                <title>Contato | Mateus Leonhardt</title>
                <meta name="keywords" content="mateus leonhardt, leonhardt, contato, fale conosco"/>
            </Helmet>

            <ContactContainer>
                <PageTitle title="Contato" />
                <p>Deixe-me uma mensagem e em breve entrarei em contato!</p>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <InputForm name="user_name" label="Nome*" required />
                    <InputForm name="email" label="E-mail*" type="email" required />
                    <TextareaForm name="message" label="Mensagem*" rows="10" required />
                    <Recaptcha name="recaptcha" />

                    <button className="main-btn" type="submit">Enviar mensagem</button>
                </Form>
            </ContactContainer>
        </Layout>
    );
}