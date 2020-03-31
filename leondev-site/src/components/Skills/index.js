import React from 'react';

import PageTitle from '../PageTitle';
import ProgressBar from '../ProgressBar';

import './styles.scss';

export default function Skills({data}) {
    return (
        <section id="skills-container">
            <PageTitle title="Habilidades" />

            <div className="skills">
                {data.map(skill => (
                    <ProgressBar key={skill.label} data={skill} />
                ))}
            </div>
        </section>
    );
}