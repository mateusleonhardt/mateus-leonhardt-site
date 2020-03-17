import React from 'react';

import './styles.css';

export default function Timeline({data}) {
    return (
        <div id="timeline">
            {data.map(experience => (
                <div className={'timeline-item ' + experience.status} key={experience.id}>
                    <div className="timeline-period">      
                        <span>{experience.period}</span>
                    </div>
                    <div className={ 'timeline-content ' + (experience.id % 2 ? '':'right')}>
                        <h3>{experience.ocupation}</h3>
                        <div className="timeline-description">
                            <p>{experience.description}</p>
                            <h6>{experience.company}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}