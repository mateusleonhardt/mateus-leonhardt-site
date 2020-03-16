import React from 'react';
import { Helmet } from 'react-helmet';

import photo from '../../assets/mateus-leonhardt.jpeg';

import './styles.css';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home | Mateus Leonhardt</title>
                <meta name="keywords" content="mateus leonhardt, leonhardt"/>
            </Helmet>

            <div id="home">
                <div className="profile">
                    <div className="photo">
                        <img src={photo} alt="Mateus Leonhardt"/>
                    </div>

                    <div className="intro">
                        <h4 className="sub-title">Olá, Eu sou</h4>
                        <h1 className="title">Mateus Leonhardt</h1>
                        <p>Desenvolvedor Web &amp; Mobile</p>
                        <a className="main-btn" href="/portfolio">Veja meu trabalho</a>
                    </div>
                </div>
            </div>
        </>
    );
}