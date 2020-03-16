import React from 'react';
import { Helmet } from 'react-helmet';

import { projects } from '../../data/site-data';

import './styles.css';

import PageTitle from '../../components/PageTitle';
import Projects from '../../components/Projects';

export default function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Portfólio | Mateus Leonhardt</title>
                <meta name="keywords" content="mateus leonhardt, leonhardt, portfólios, projetos, sites, aplicativos,"/>
            </Helmet>

            <div id="portfolio">
                <PageTitle title="Portfolio" />

                <div className="projects">
                    <Projects data={projects} />
                </div>
            </div>
        </>
    );
}