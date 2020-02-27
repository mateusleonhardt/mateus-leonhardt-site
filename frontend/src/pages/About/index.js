import React from 'react';

import { skills, idioms } from '../../data/site-data';

import PageTitle from '../../components/PageTitle';
import Skills from '../../components/Skills';
import Idioms from '../../components/Idioms';

export default function About() {
    return (
        <>
            <div id="about">
                <PageTitle title="Sobre mim" />
            </div>

            <Skills data={skills} />
            
            <Idioms data={idioms} />
        </>
    );
}