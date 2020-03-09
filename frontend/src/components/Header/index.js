import React from 'react';
import { NavLink } from 'react-router-dom';

import SocialIcons from '../SocialIcons';

import './styles.css';

export default function Header() {
    return (
        <header id="main-header">
            <div className="links">
                <SocialIcons className="social-icons" />

                <ul className="menu">
                    <li>
                        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre" activeClassName="active">Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" activeClassName="active">Contato</NavLink>
                    </li>
                </ul>
            </div>            
        </header>
    );
}