import React from "react";
import { auth } from "../utils/firebase";
import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    const navigate = useNavigate();
    const userData = useSelector(state => state.user)
    console.log(userData)
    const signOutHandler = () => {
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            navigate('/error')
          });
    }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between align-middle">
      <img
      className="w-36"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo-img"
      />
      {userData && <div className="pt-2 flex">
      <img className="w-8 h-8" src={userData.photoURL} alt="user-img" />
        <button className="border  border-black text-white font-bold p-2 rounded-lg" onClick={signOutHandler}>Sign out</button>
      </div>}
    </div>

  );
};

export default Header;
