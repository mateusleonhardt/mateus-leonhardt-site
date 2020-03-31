import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageTitle from '../PageTitle';

import './styles.scss';

export default function Education({data}) {
    return (
        <section id="education-container">
            <PageTitle title="Educação" />

            {data.map(education => (
                <div className="education" key={education.course}>
                    <a href={education.institution.site} className="info">
                        <div className="icon">
                            <FontAwesomeIcon icon={[education.icon.type, education.icon.name]} />
                        </div>
                        <div className="inner-info">
                            <h4 className="course">{education.course}</h4>
                            <h5 className="institution">{education.institution.name}</h5>
                            <div className="period">{education.period}</div>
                        </div>
                    </a>
                </div>
            ))}
        </section>       
    );
}