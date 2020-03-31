import React from 'react';
import { Helmet } from 'react-helmet';

import { projects } from '../../../config/metadata';

import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Projects from '../../components/Projects';

import "./styles.scss";

export default function Portfolio() {
    return (
        <Layout>
            <Helmet>
                <title>Portfólio | Mateus Leonhardt</title>
                <meta name="keywords" content="mateus leonhardt, leonhardt, portfólios, projetos, sites, aplicativos,"/>
            </Helmet>

            <div id="portfolio">
                <PageTitle title="Portfólio" />

                <div className="projects">
                    <Projects projects={projects} />
                </div>
            </div>
        </Layout>
    );
}