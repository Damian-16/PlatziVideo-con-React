import React from 'react';
import '../assets/styles/components/Header.scss'

import logo from  '../assets/static/logo-platzi-video-BW2.png';//aca estoy trayendo directamente la imagen de logo para pegarlo en el src de mas abajito

import userIcon from '../assets/static/user-icon.png';






const Header = () =>(
    <header className="header">
    <img className="header__img" src={logo} alt="Platzi Video"/>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>

);

export default Header