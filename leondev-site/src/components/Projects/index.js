import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

export default function Projects({ projects }) {
    const { allFile: { nodes }} = useStaticQuery (
        graphql`
            query ProjectsQuery{
                allFile(filter: {relativeDirectory: {regex: "/projects/"}}) {
                    nodes {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                    }
                }
            }
        `
    )

    const getImageUrl = (imgName) => {
        const imgData = nodes.find(item => item.childImageSharp.fluid.originalName === imgName)
        
        return imgData.childImageSharp.fluid;
    }

    return (
        <>
            {projects.map(project => (
                <div className="project" key={project.label}>
                    <Img fluid={getImageUrl(project.image)} />
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