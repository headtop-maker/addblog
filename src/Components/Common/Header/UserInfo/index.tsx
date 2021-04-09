import React from "react";
import style from "./UserInfo.module.scss";

class UserInfo extends React.PureComponent {
  render() {
    return (
      <>
        <div className={style["user-info_wrapper"]}>Профиль</div>
      </>
    );
  }
}

export default UserInfo;
