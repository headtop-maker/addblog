import React, { FC } from "react";
import style from "./PasswordInput.module.scss";

interface IProps {
  setPassword: any;
  password: string;
}

const PasswordInput: FC<IProps> = (props: IProps) => {
  const { setPassword, password } = props;
  return (
    <>
      <input
        className={style.input}
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
        value={password}
      />
    </>
  );
};

export default PasswordInput;
