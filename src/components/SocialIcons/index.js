import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { social } from '../../../config/metadata';

export default function SocialIcons(props) {
    return (
        <ul className={props.className}>
            { social.map(item => (
                <li key={item.name}>
                    <a href={item.url} title={item.name}>
                        <FontAwesomeIcon icon={[item.icon.type, item.icon.name]} />
                    </a>
                </li>
            ))}
        </ul>
    );
}