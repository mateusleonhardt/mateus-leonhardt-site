import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { github, linkedin } from '../../data/site-data';

export default function SocialIcons() {
    return (
        <ul>
            <li><a href={github} title="Github"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
            <li><a href={linkedin} title="Linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
        </ul>
    );
}