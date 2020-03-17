import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

export default function Projects({data}) {
    return (
        <>
            {data.map(project => (
                <div className="project" key={project.label}>
                    <img src={project.image} alt={project.label} />
                    <div className="language">
                        {project.technologies.map(technologie => (
                            <FontAwesomeIcon icon={[technologie.type, technologie.name]} key={technologie.name} />
                        ))}
                    </div>
                    <div className="info">
                        <h3>{project.label}</h3>
                        <a href={project.link}><FontAwesomeIcon icon={['fas', 'link']} /></a>
                    </div>
                    <div className="delivered-on">{project.year}</div>
                </div>
            ))}
        </>       
    );
}