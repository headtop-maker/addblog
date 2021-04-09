import React, { FC, useState } from "react";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./RegistrationForm.module.scss";

const RegistrationForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [returnPassword, setReturnPassword] = useState<string>("");

  const [formValue, setFormValue] = useState({
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  console.log(formValue);
  return (
    <>
      <div className={style["registration-form_wrapper"]}>
        <form className={style.form}>
          <h1>Регистрация</h1>
          <TextInput
            setLogin={setLogin}
            formKey="login"
            login={login}
            title="Login"
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <TextInput
            setLogin={setEmail}
            formKey="email"
            title="Email"
            login={login}
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <PasswordInput
            setPassword={setPassword}
            formKey="password"
            title="Password"
            password={password}
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <PasswordInput
            setPassword={setReturnPassword}
            formKey="returnPassword"
            title="Return password"
            password={password}
            formValue={formValue}
            setFormValue={setFormValue}
          />

          <button
            type="button"
            className={style.btn}
            onClick={() => {
              console.log(
                { login, email, password, returnPassword },
                "Объект регистрации"
              );
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
