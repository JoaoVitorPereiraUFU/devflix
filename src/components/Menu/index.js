import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

import Button from '../Button';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="DevFlix" className='Logo'/>
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;