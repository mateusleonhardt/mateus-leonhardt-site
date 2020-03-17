import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Helmet } from 'react-helmet';

import { title } from '../../config/metadata';

export default function () {
    const getImage = () => {
            return <StaticQuery 
                query={graphql`
                    query {
                      file(relativePath: { eq: "mateus-leonhardt.jpeg" }) {
                        childImageSharp {
                            fixed(width: 250, height: 250) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                      }
                    }
                `}

                render={data => (
                    <Img
                      alt={title}
                      fixed={data.file.childImageSharp.fixed} />
                )}
            />
    }

    return (
        <>
            <Helmet>
                <title>Home | Mateus Leonhardt</title>
                <meta name="keywords" content="mateus leonhardt, leonhardt"/>
            </Helmet>

            <div id="home">
                <div className="profile">
                    <div className="photo">
                        {getImage()}
                    </div>

                    <div className="intro">
                        <h4 className="sub-title">Olá, Eu sou</h4>
                        <h1 className="title">Mateus Leonhardt</h1>
                        <p>Desenvolvedor Web &amp; Mobile</p>
                        <a className="main-btn" href="/portfolio">Veja meu trabalho</a>
                    </div>
                </div>
            </div>
        </>
    );
}