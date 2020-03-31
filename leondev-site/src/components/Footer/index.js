import React from 'react';

import SocialIcons from '../SocialIcons';
import { title } from '../../../config/metadata';

import './styles.scss';

export default function Footer() {
    var currentDate = new Date();

    return (
        <footer id="main-footer">
            <SocialIcons className="social-icons" />
            <div className="copyright">
                <h4>©{currentDate.getFullYear()} | Desenvolvido por {title} </h4>
            </div>
        </footer>
    );
}