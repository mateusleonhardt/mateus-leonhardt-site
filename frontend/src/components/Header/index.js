import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

export default function Header() {
    return (
        <header id="main-header">
            <ul className="links">
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
        </header>
    );
}