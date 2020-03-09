import React from 'react';

import SocialIcons from '../SocialIcons';
import { name } from '../../data/site-data';

import './styles.css';

export default function Footer() {
    var currentDate = new Date();

    return (
        <footer id="main-footer">
            <div className="social-icons">
                <SocialIcons />
            </div> 
            <div class="copyright">
                <h4>©{currentDate.getFullYear()} | Desenvolvido por {name} </h4>
            </div>
        </footer>
    );
}