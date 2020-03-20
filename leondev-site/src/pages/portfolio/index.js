import React from 'react';
import { Helmet } from 'react-helmet';

import { projects } from '../../../config/metadata';

import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Projects from '../../components/Projects';

import { ProjectsList } from "./styles";

export default function Portfolio() {
    return (
        <Layout>
            <Helmet>
                <title>Portfólio | Mateus Leonhardt</title>
                <meta name="keywords" content="mateus leonhardt, leonhardt, portfólios, projetos, sites, aplicativos,"/>
            </Helmet>

            <div id="portfolio">
                <PageTitle title="Portfólio" />

                <ProjectsList>
                    <Projects projects={projects} />
                </ProjectsList>
            </div>
        </Layout>
    );
}