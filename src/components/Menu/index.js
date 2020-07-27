import React from 'react';
import Logo from '../../assets/img/logo.png';

import Button from '../Button';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="DevFlix" className='Logo'/>
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;