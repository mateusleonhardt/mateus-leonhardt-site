import React from 'react';

import PageTitle from '../PageTitle';
import ProgressBullet from '../ProgressBullet';

import './styles.css';

export default function Idioms({data}) {
    return (
        <section id="idioms-container">
            <PageTitle title="Idiomas" />

            <ul className="idioms">
                {data.map(idiom => (
                    <ProgressBullet key={idiom.label} data={idiom} />
                ))}
            </ul>
        </section>
    );
}