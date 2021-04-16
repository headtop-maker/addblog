import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regFormAction } from "../../../store/regPage/actions";
import { getRegInfo } from "../../../store/regPage/selector";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./RegistrationForm.module.scss";

const RegistrationForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [returnPassword, setReturnPassword] = useState<string>("");
  const dispatch = useDispatch(); // подключаем dispatch
  let date: any = 0;
  date = Date.now();


  const loginOnStore = useSelector(getRegInfo);
  const checkLogin = (login) => {
    return loginOnStore.find((user) => user.login === login);
  }

  return (
    <>
      <div className={style["registration-form_wrapper"]}>
        <form className={style.form}>
          <h1>Регистрация</h1>
          Login
          <TextInput setLogin={setLogin} login={login} />
          email
          <TextInput setLogin={setEmail} login={email} />
          password
          <PasswordInput setPassword={setPassword} password={password} />
          returnPassword
          <PasswordInput
            setPassword={setReturnPassword}
            password={returnPassword}
          />
          <button
            type="button"
            className={style.btn}
            onClick={() => {
              console.log(
                { login, email, password, returnPassword },
                "Объект регистрации"
              );
              // checkLogin(login);
              if (password && returnPassword && password === returnPassword) {
                if (!checkLogin(login)) {
                  dispatch(
                    regFormAction([
                      { id: date, login: login, email, password, returnPassword },
                    ])
                  );
                } else { alert("Пользователь существует") }
              } else { alert("Пароли должны совпадать и заполнены") };

              setLogin("");
              setEmail("");
              setPassword("");
              setReturnPassword("");
            }}>
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
