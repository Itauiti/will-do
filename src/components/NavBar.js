import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const isLoggedIn = true;

  return (
    <nav className="menu">
      <NavLink className="menu__item" activeClassName="menu__item_active" exact to="/">Главная</NavLink>
      {isLoggedIn === true &&
        <NavLink className="menu__item" activeClassName="menu__item_active" to="/users_page">Личный кабинет</NavLink>
      }
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/auth">{isLoggedIn ? 'Плотва' : 'Авторизация'}</NavLink>
    </nav>
  );
}

export default NavBar;
