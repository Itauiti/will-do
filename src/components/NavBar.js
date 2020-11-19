import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="menu">
      <NavLink className="menu__item" activeClassName="menu__item_active" exact to="/">Главная</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/users_page">Личный кабинет</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/auth">Авторизация</NavLink>
    </nav>
  );
}

export default NavBar;
