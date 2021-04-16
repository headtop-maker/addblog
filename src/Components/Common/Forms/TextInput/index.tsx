import React, { FC } from "react";
import style from "./TextInput.module.scss";

interface IProps {
  setLogin: any;
  login: string;
}

const TextInput: FC<IProps> = (props: IProps) => {
  const { setLogin, login } = props;

  return (
    <>
      <input
        className={style.input}
        type="text"
        onChange={(e) => setLogin(e.currentTarget.value)}
        value={login}
      />
    </>
  );
};

export default TextInput;