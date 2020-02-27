import React from 'react';

import PageTitle from '../../components/PageTitle/index';
import ProgressBar from '../../components/ProgressBar/index';

import './styles.css';

export default function Idioms({data}) {
    return (
        <section id="idioms-container">
            <PageTitle title="Idiomas" />

            <div className="idioms">
                {data.map(idiom => (
                    <ProgressBar key={idiom.label} data={idiom} />
                ))}
            </div>
        </section>
    );
}