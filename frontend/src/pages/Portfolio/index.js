import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

import ajesc from '../../assets/ajesc.png';

export default function Portfolio() {
    return (
        <div id="portfolio">
            <section className="page-title">
                <h2>Portfolio</h2>
                <span>Portfolio</span>
            </section>

            <div className="projects">
                <div className="work">
                    <img src={ajesc} alt="AJESC"/>
                    <div className="language">
                        <FontAwesomeIcon icon={['fab', 'html5']} />
                        <FontAwesomeIcon icon={['fab', 'wordpress']} />
                    </div>
                    <div className="info">
                        <h3>AJESC</h3>
                        <a href="/"><FontAwesomeIcon icon={['fas', 'link']} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}