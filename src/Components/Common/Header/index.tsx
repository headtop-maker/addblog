import React from "react";
import style from "./Header.module.scss";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import UserInfo from "./UserInfo";

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <header className={style.header_wrapper}>
          <Logo />
          <NavMenu />
          <UserInfo />
        </header>
      </>
    );
  }
}

export default Header;
