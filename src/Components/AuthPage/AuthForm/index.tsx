import React, { FC, useState } from "react";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./AuthForm.module.scss";

const AuthForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div className={style["auth-form_wrapper"]}>
        <form className={style.form}>
          <h1>Авторизация</h1>

          {/* <TextInput setLogin={setLogin} login={login} title="Login" />
          <PasswordInput
            setPassword={setPassword}
            password={password}
            title="Password"
          /> */}

          <button
            type="button"
            className={style.btn}
            onClick={() => {
              console.log({ login, password }, "Объект авторизации");
              setLogin("");
              setPassword("");
            }}>
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
