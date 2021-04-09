import React, { FC } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import RegistrationForm from "./RegistrationForm";
import style from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
  return (
    <>
      <div className={style["registration-page_wrapper"]}>
        <Header />
        <RegistrationForm />
        <Footer />
      </div>
    </>
  );
};

export default RegistrationPage;
