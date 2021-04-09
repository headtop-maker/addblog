import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import style from "./MainPage.module.scss";
import Slider from "./Slider";

class MainPage extends React.PureComponent {
  render() {
    return (
      <>
        <div className={style.main_page_wrapper}>
          <Header />
          <Slider />
          <Footer />
        </div>
      </>
    );
  }
}

export default MainPage;
