import React from 'react';

import { skills } from '../../data/site-data';

import PageTitle from '../../components/PageTitle';
import Skills from '../../components/Skills';

export default function About() {
    return (
        <>
            <div id="about">
                <PageTitle title="Sobre mim" />
            </div>

            <Skills data={skills} />
        </>
    );
}