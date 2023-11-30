import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { CSSTransition } from 'react-transition-group';
import FamilyMenuList from '../Family/Header/MenuList';
import MateMenuList from '../Mate/Header/MenuList';
import './Dropdown.css';

const Dropdown = ({ type, isOpen }) => {
    const menuItems = ($type) => {
        const menuList = $type === 'family' ? FamilyMenuList : MateMenuList;
        return menuList.map((item) => (
            <li key={item.url} className="dropdown_menu_item">
                <Link to={`/${$type}/${item.url}`}>{item.title}</Link>
            </li>
        ));
    };

    return (
        <div className="Dropdown">
            <CSSTransition in={isOpen} timeout={10} className="menu" unmountOnExit>
                <Fade top cascade>
                    <ul className="dropdown_menu">{menuItems(type)}</ul>
                </Fade>
            </CSSTransition>
        </div>
    );
};

export default Dropdown;
