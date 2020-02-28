import React from 'react';

import PageTitle from '../PageTitle';
import Timeline from '../Timeline';

export default function Experiences({ data }) {
    return (
        <section id="experience-container">
            <PageTitle title="Experiências" />

            <Timeline  data={data} />
        </section>
    );
}