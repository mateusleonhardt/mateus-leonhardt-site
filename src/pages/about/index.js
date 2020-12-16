import React from 'react';
import { Helmet } from 'react-helmet';

import {skills, idioms, experiences, education} from '../../../config/metadata';

import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Skills from '../../components/Skills';
import Idioms from '../../components/Idioms';
import Experiences from '../../components/Experiences';
import Education from '../../components/Education';

export default function About({ pageContext }) {
    return (
        <Layout context={pageContext} crumbLabel="Sobre mim">
            <Helmet>
                <title>Sobre mim | Mateus Leonhardt</title>
                <meta name="keywords" content="mateus leonhardt, leonhardt, sobre, sobre mim, websites, sistemas, c#, asp.net mvc,"/>
            </Helmet>

            <div id="about">
                <PageTitle title="Sobre mim" />
                <p>Formado em Ciência da Computação e um programador com mais de 7 anos de atuação com desenvolvimento 
                    de sistemas, sites corporativos e intranets utilizando plataformas como Microsoft Sharepoint, 
                    Microsoft .NET em C#, ASP.NET MVC, React, Wordpress e Angular. Tenho interesse em estar sempre 
                    aprendendo novas tecnologias, aprimorando os conhecimentos que já possuo e sempre que possível 
                    contribuindo com meus colegas de equipe para crescimento mútuo.</p>
            </div>

            <Skills data={skills} />
            
            <Idioms data={idioms} />

            <Experiences data={experiences} />

            <Education data={education} />
        </Layout>
    );
}