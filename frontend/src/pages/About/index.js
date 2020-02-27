import React from 'react';

//import './styles.css';
import PageTitle from '../../components/PageTitle/index';
import Skills from '../../components/Skills/index';

export default function About() {
    const skills = [
        {
            label: "HTML & CSS",
            level: 5
        },
        {
            label: "ReactJS",
            level: 3
        }
    ];

    return (
        <>
            <div id="about">
                <PageTitle title="Sobre mim" />
            </div>

            <Skills data={skills} />
        </>
    );
}