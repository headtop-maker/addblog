import React from "react";
import { NavLink } from 'react-router-dom';
import style from "./NavMenu.module.scss";

class NavMenu extends React.PureComponent {
  render() {
    return (
      <>
        <nav className={style.nav_wrapper}>
          <ul className={style.nav_list}>
            <li>О нас</li>
            <li><NavLink exact to="/" >Главная</NavLink></li>
            <li><NavLink exact to="/blog" >Блог</NavLink></li>
            <li>Новости</li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavMenu;
