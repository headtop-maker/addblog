import React, { FC } from "react";
import style from "./TextInput.module.scss";

interface IProps {
  setLogin: any;
  login: string;
  title: string;
  formValue: any;
  setFormValue: any;
  formKey: string;
}

const TextInput: FC<IProps> = (props: IProps) => {
  const { setLogin, login, title, formValue, setFormValue, formKey } = props;

  return (
    <>
      <div className={style.input_wrapper}>
        <span>{title}</span>
        <input
          className={style.input}
          type="text"
          onChange={(e) =>
            setFormValue({ ...formValue, [formKey]: e.currentTarget.value })
          }
          value={formValue.formKey}
        />
      </div>
    </>
  );
};

export default TextInput;
