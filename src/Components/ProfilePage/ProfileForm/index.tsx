import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authFormAction } from "../../../store/authForm/actions";
import { getAuthInfo } from "../../../store/authForm/selector";
import { getRegInfo } from "../../../store/regPage/selector";
import style from "./ProfileForm.module.scss"


const ProfileForm: FC = () => {
  const dispatch = useDispatch();
  const authOnStore = useSelector(getAuthInfo);
  const loginOnStore = useSelector(getRegInfo);
  let profileContent: any = '';

  const path = `/auth`;
  const history = useHistory();//хук


  const checkProfileInfo = () => {
    if (authOnStore && loginOnStore) {
      profileContent = loginOnStore.find((user) => user.login === authOnStore);
    }
  }
  checkProfileInfo();
  return (
    <>
      <div >
        <div className={style.wrapper_profile}>
          <div className={style.profile}>
            <p> Пользователь: {profileContent.login}</p>
            <p> Почта: {profileContent.email}</p>
            <p> Пароль: {profileContent.password}</p>
            <button type="button" onClick={() => {
              dispatch(authFormAction('')); history.push(path);//редирект на auth
            }
            }>Выйти</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;