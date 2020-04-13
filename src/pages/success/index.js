import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "gatsby";

import Layout from '../../components/Layout';

import './styles.scss';

export default function SuccessContact({ pageContext }) {
    return (
        <Layout context={pageContext} crumbLabel="Portfólio">
            <Helmet>
                <title>Sucesso | Mateus Leonhardt</title>
            </Helmet>

            <div id="success-contact">
                <FontAwesomeIcon icon={['fas', 'paper-plane']} />
                <h1>Obrigado!</h1>
                <p>Sua mensagem foi enviada. Entrarei em contato em breve para responder a todas as suas perguntas!</p>
                <Link to="/" className="main-btn">Me leve de volta</Link>
            </div>
        </Layout>
    );
}