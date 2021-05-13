import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';

import logo from  '../assets/static/logo-platzi-video-BW2.png';//aca estoy trayendo directamente la imagen de logo para pegarlo en el src de mas abajito

import userIcon from '../assets/static/user-icon.png';






const Header = () =>(
    <header className="header">
      <Link to="/">
    <img className="header__img" src={logo} alt="Platzi Video"/>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li>
          <Link to="login">Iniciar Sesión</Link></li>
      </ul>
    </div>
  </header>

);

export default Header