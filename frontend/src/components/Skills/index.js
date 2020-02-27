import React from 'react';

import PageTitle from '../../components/PageTitle/index';
import ProgressBar from '../../components/ProgressBar/index';

import './styles.css';

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