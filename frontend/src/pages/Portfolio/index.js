import React from 'react';

import { projects } from '../../data/site-data';

import './styles.css';

import PageTitle from '../../components/PageTitle';
import Projects from '../../components/Projects';

export default function Portfolio() {
    return (
        <div id="portfolio">
            <PageTitle title="Portfolio" />

            <div className="projects">
                <Projects data={projects} />
            </div>
        </div>
    );
}