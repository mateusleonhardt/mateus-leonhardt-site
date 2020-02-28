import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { github, linkedin } from '../../data/site-data';
import photo from '../../assets/mateus-leonhardt.jpeg';

import './styles.css';

export default function Home() {
    return (
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

            <div className="header-social">
                <div className="header-social-icon">
                    <ul>
                        <li><a href={github} title="Github"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                        <li><a href={linkedin} title="Linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    </ul>
                </div> 
            </div>
        </div>
    );
}