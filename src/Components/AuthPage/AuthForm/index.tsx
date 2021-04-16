import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authFormAction } from "../../../store/authForm/actions";
import { getAuthInfo } from "../../../store/authForm/selector";
import { getRegInfo } from "../../../store/regPage/selector";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./AuthForm.module.scss";

const AuthForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const usersOnStore = useSelector(getRegInfo);//получаем массив объектов через селектор

  const checkUser = (login, password) => {
    const findUser = usersOnStore.find((user) => user.login === login);//поиск в массиве
    if (findUser && findUser.password === password) {
      return findUser.login;
    }
  }
  return (
    <>
      <div className={style["auth-form_wrapper"]}>
        <form className={style.form}>
          <h1>Авторизация</h1>
          login
          <TextInput setLogin={setLogin} login={login} />
          password
          <PasswordInput setPassword={setPassword} password={password} />
          <button
            type="button" onClick={() => {
              if (login && password) {
                console.log({ login, password }, "Объект авторизации");

                if (checkUser(login, password)) {
                  dispatch(authFormAction(login));//обновляем данные в store
                } else { alert("Проверьте логин и пароль") };

                setLogin("");
                setPassword("");
              } else { alert("Заполните все поля") }
            }}>
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;


