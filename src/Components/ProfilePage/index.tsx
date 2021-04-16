import React, { FC, useEffect, useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import ProfileForm from "./ProfileForm";



const ProfilePage: FC = () => {


  return (
    <>
      <div >
        <Header />
        <ProfileForm />
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;