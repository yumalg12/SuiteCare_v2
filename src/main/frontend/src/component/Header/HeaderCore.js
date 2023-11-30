import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderCore.css';
import Logo from '../../assets/img/logo/logo-full-highres.png';
import Dropdown from './Dropdown';

const HeaderCore = ({ type }) => {
    const [familyMenuOpen, setFamilyMenuOpen] = useState(false);
    const [mateMenuOpen, setMateMenuOpen] = useState(false);

    const toggleMenu = ($type) => {
        if ($type === 'family') {
            setFamilyMenuOpen(!familyMenuOpen);
            setMateMenuOpen(false);
        } else if ($type === 'mate') {
            setMateMenuOpen(!mateMenuOpen);
            setFamilyMenuOpen(false);
        }
    };

    return (
        <header id="core">
                <Link id="logo" to={`/${type}/main`}>
                    <img src={Logo} alt="Logo" />
                </Link>
                <nav id="nav-wrap">
                    <ul className="menu_wrapper">
                        <li>
                            <button onClick={() => toggleMenu('family')} className={`${type === 'family' ? 'active' : ''}`}>간병인 찾기</button>
                            <Dropdown type='family' isOpen={familyMenuOpen} />
                        </li>
                        <li>
                            <button onClick={() => toggleMenu('mate')} className={`${type === 'mate' ? 'active' : ''}`}>간병 일감 찾기</button>
                            <Dropdown type='mate' isOpen={mateMenuOpen} />
                        </li>
                    </ul>
                </nav>
        </header>
    );
};

export default HeaderCore;