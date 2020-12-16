import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

import './styles.scss';

export default function Projects({ projects }) {
    const { openLightbox } = useLightbox();

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
                <div className={project.link !== "" ? "project" : "project old"} 
                    key={project.label} 
                    onClick={() => project.link !== "" ? console.log("no-dialog") : openLightbox()}
                >
                    { project.link !== "" 
                        ? (<Img fluid={getImageUrl(project.image)} />) 
                        : (
                            <SRLWrapper>
                                <Img fluid={getImageUrl(project.image)} />
                            </SRLWrapper>  
                        )
                    } 
                    <div className="language">
                        {project.technologies.map(technologie => (
                            <FontAwesomeIcon icon={[technologie.type, technologie.name]} key={technologie.name} />
                        ))}
                    </div>
                    <div className="info">
                        <h3>{project.label}</h3>
                        { project.link !== "" 
                            ? (<a href={project.link}><FontAwesomeIcon icon={['fas', 'link']} /></a>)
                            : ""
                        }
                    </div>
                    <div className="delivered-on">{project.year}</div>
                </div>
            ))}
        </>       
    );
}