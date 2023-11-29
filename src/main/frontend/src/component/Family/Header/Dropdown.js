import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuList from './MenuList';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = MenuList.map((e) => (
    <li key={e.url} className="small_menu_item">
      <a href={'/family/' + e.url}>{e.title}</a>
    </li>
  ));

  return (
    <div>
      <button onClick={toggleDropdown}>간병인 찾기</button>
      <CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
        <ul className="small_menu">{menuItems}</ul>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;