import React from 'react';

import { skills, idioms, experiences, education } from '../../data/site-data';

import PageTitle from '../../components/PageTitle';
import Skills from '../../components/Skills';
import Idioms from '../../components/Idioms';
import Experiences from '../../components/Experiences';
import Education from '../../components/Education';

export default function About() {
    return (
        <>
            <div id="about">
                <PageTitle title="Sobre mim" />
            </div>

            <Skills data={skills} />
            
            <Idioms data={idioms} />

            <Experiences data={experiences} />

            <Education data={education} />
        </>
    );
}