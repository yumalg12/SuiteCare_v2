import React from 'react';
import { useNavigate } from 'react-router';
import Fade from 'react-reveal';
import './HeaderCore.css';
import Logo from '../../assets/img/logo/logo-full-highres.png';
import FamilyMenu from '../Family/Header/Menu';
import MateMenu from '../Mate/Header/Menu';

const HeaderCore = ({ type }) => {
  let menuComponent;

  switch (type) {
    case "family":
      menuComponent = <FamilyMenu />;
      break;
    case "mate":
      menuComponent = <MateMenu />;
      break;
    default:
      menuComponent = null;
  }

  const navigate = useNavigate();

  const goMain = (type) => {
    navigate(`/${type}/main`);
  };

  const goLogin = (type) => {
    navigate(`/${type}/login`);
  };

  return (
    <header id='core'>
      <Fade duration={2000}>
        <a id="logo" href='/'>
          <img src={Logo} alt="Logo" />
        </a>
        <nav id="nav-wrap">
          <ul className='big_menu'>
            <li className={`${type === 'family' ? 'active' : ''}`} onClick={() => `${type === 'family' ? goMain("family") : goLogin("family")}`}>간병인 찾기</li>
            <li className={`${type === 'mate' ? 'active' : ''}`} onClick={() => `${type === 'mate' ? goMain("mate") : goLogin("mate")}`}>간병 일감 찾기</li>
          </ul>
        </nav>

        {menuComponent}

      </Fade>
    </header>
  );
}

export default HeaderCore;
