import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import SocialIcons from '../SocialIcons';
import MenuButton from '../MenuButton';

import './styles.css';

export default function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }
      
    function handleLinkClick() {
        setMenuOpen(false);
    }

    return (
        <header id="main-header">
            <div className="links">
                <SocialIcons className="social-icons" />

                <div className={"main-menu " + (menuOpen ? "active" : '')}>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" activeClassName="active" exact onClick={()=>{handleLinkClick();}}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" activeClassName="active" onClick={()=>{handleLinkClick();}}>Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" activeClassName="active" onClick={()=>{handleLinkClick();}}>Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contato" activeClassName="active" onClick={()=>{handleLinkClick();}}>Contato</NavLink>
                        </li>
                    </ul>
                </div>
                
                <MenuButton open={menuOpen} onClick={()=>handleMenuClick()} />
            </div>            
        </header>
    );
}