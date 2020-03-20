import React, {useState} from 'react';
//import { NavLink } from 'react-router-dom';
import { Link } from "gatsby"

import SocialIcons from '../SocialIcons';
import MenuButton from '../MenuButton';

import { menuLinks } from '../../../config/metadata';

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
                        { menuLinks.map(item => (
                            <li key={item.name}>
                                <Link to={item.link} activeClassName="active" onClick={()=>{handleLinkClick();}}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <MenuButton open={menuOpen} onClick={()=>handleMenuClick()} />
            </div>            
        </header>
    );
}