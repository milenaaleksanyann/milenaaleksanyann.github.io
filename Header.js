import React, { useState } from 'react';
import './header.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { IoIosHome } from "react-icons/io";

export const listPage = ["AboutMe", "Skills", "ContactMe"];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [list] = useState(listPage);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <div className='logo'><a href='../../../../../pudivc/index.html'><IoIosHome /></a></div>

            <nav>
                <div className='burger-menu' onClick={toggleMenu}>
                    {menuOpen ? <GrClose className="burgerIcon" /> : <GiHamburgerMenu className="burgerIcon" />}
                </div>

                <ul className={`navigation ${menuOpen ? 'active' : ''}`}>
                    {list.map((elem) => {
                       return <li key={elem} className='li'>
                            <a href={"/" + elem} onClick={closeMenu}>
                                {elem}
                            </a>
                        </li>
})}
                </ul>
            </nav>
        </header>
    );
}
