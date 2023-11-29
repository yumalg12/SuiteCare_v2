import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import Fade from 'react-reveal';
import './HeaderCore.css';
import Logo from '../../assets/img/logo/logo-full-highres.png';
import FamilyMenu from '../Family/Header/Menu';
import MateMenu from '../Mate/Header/Menu';
import FamilyMenuList from '../Family/Header/MenuList';
import MateMenuList from '../Mate/Header/MenuList';

const HeaderCore = ({ type }) => {
  const [familyMenuOpen, setFamilyMenuOpen] = useState(false);
  const [mateMenuOpen, setMateMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleFamilyMenu = () => {
    setFamilyMenuOpen(!familyMenuOpen);
    setMateMenuOpen(false); // 간병 일감 찾기 메뉴 닫기
  };

  const toggleMateMenu = () => {
    setMateMenuOpen(!mateMenuOpen);
    setFamilyMenuOpen(false); // 간병인 찾기 메뉴 닫기
  };

  const familyMenuItems = FamilyMenuList.map((e) => (
    <li key={e.url} className="small_menu_item">
      <a href={'/family/' + e.url}>{e.title}</a>
    </li>
  ));

  const mateMenuItems = MateMenuList.map((e) => (
    <li key={e.url} className="small_menu_item">
      <a href={'/mate/' + e.url}>{e.title}</a>
    </li>
  ));

  let menuComponent = null;

  switch (type) {
    case 'family':
      menuComponent = <FamilyMenu />;
      break;
    case 'mate':
      menuComponent = <MateMenu />;
      break;
    default:
      break;
  }

  const navigateToMain = (type) => {
    navigate(`/${type}/main`);
  };

  const navigateToLogin = (type) => {
    navigate(`/${type}/login`);
  };

  return (
    <header id="core">
      <Fade duration={2000}>
        <a id="logo" href="/">
          <img src={Logo} alt="Logo" />
        </a>
        <nav id="nav-wrap">
          <ul className="drop_down">
            <li className={`${type === 'family' ? 'active' : ''}`}>
              <button onClick={() => {
                toggleFamilyMenu();
                if (type === 'family') {
                  navigateToMain('family');
                } else {
                  navigateToLogin('family');
                }
              }}>
                간병인 찾기
              </button>
              <CSSTransition
                in={familyMenuOpen}
                timeout={300}
                classNames="menu"
                unmountOnExit
              >
                <ul className="small_menu">{familyMenuItems}</ul>
              </CSSTransition>
            </li>
            <li className={`${type === 'mate' ? 'active' : ''}`}>
              <button onClick={() => {
                toggleMateMenu();
                if (type === 'mate') {
                  navigateToMain('mate');
                } else {
                  navigateToLogin('mate');
                }
              }}>
                간병 일감 찾기
              </button>
              <CSSTransition
                in={mateMenuOpen}
                timeout={300}
                classNames="menu"
                unmountOnExit
              >
                <ul className="small_menu">{mateMenuItems}</ul>
              </CSSTransition>
            </li>
          </ul>
        </nav>
      </Fade>
    </header>
  );
};

export default HeaderCore;
