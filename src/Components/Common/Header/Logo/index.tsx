import React from "react";
import { NavLink } from 'react-router-dom';
import style from "./Logo.module.scss";
import logo from "../../../../assets/image/logo.svg";

class Header extends React.PureComponent {
  render() {
    return (
      <>
      
        <div className={style.logo_wrapper}>
       <NavLink exact to="/" >    <img src={logo} alt="logo" /> </NavLink>
        </div>
       
      </>
    );
  }
}

export default Header;
