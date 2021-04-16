import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuthInfo } from "../../../../store/authForm/selector";
import style from "./UserInfo.module.scss";



const UserInfo: FC = () => {
  const authOnStore = useSelector(getAuthInfo);



  const checkAuthInfo = () => {
    if (authOnStore) {
      return <NavLink exact to="/profile" >{authOnStore}: Профиль</NavLink>
    } else {
      return <NavLink exact to="/auth" >Войти</NavLink>
    }
  }

  return (
    <>
      <div className={style["user-info_wrapper"]}><NavLink exact to="/reg" >Регистрация</NavLink></div>
      <div className={style["user-info_wrapper"]}>{checkAuthInfo()}</div>
    </>
  );
}


export default UserInfo;
