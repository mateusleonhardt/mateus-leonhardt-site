import React from 'react';

import {skills, idioms, experiences, education } from '../../data/site-data';

import PageTitle from '../../components/PageTitle';
import Skills from '../../components/Skills';
import Idioms from '../../components/Idioms';
import Experiences from '../../components/Experiences';
import Education from '../../components/Education';

export default function About() {
    return (
        <>
            <div id="about">
                <PageTitle title="Sobre mim" />
                <p>Olá! Quer saber mais sobre mim?!</p>
                <p>Sou formado em Ciência da Computação e um programador com mais de 7 anos com atuação no desenvolvimento 
                    de sistemas, sites corporativos e intranets utilizando plataformas como Microsoft Sharepoint, 
                    Microsoft .NET em C#, ASP.NET MVC, React, Wordpress e Angular. Tenho interesse em estar sempre 
                    aprendendo novas tecnologias, aprimorando os conhecimentos que já possuo e sempre que possível 
                    contribuindo com meus colegas de equipe para crescimento mútuo.</p>
                <p><strong>Status:</strong> Atualmente apaixonado por React e React Native <span role="img" aria-label="heart-eyes">😍</span></p>
            </div>

            <Skills data={skills} />
            
            <Idioms data={idioms} />

            <Experiences data={experiences} />

            <Education data={education} />
        </>
    );
}