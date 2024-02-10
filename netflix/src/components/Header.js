import React,{useEffect} from "react";
import { auth } from "../utils/firebase";
import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";


const Header = () => {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const userData = useSelector(state => state.user)
   // console.log(userData)
    const signOutHandler = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            navigate('/error')
          });
    }

    useEffect(() => { // when ever auth state changed sign / sign up or sigh out it will handle here only
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoUrl } = user;
            dispath(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoUrl: photoUrl,
              })
            );
            navigate('/browse')
          } else {
            dispath(removeUser());
            navigate('/')
          }
        });
        // unsubscribe when coponent unmounts
        return () => unsubscribe(); 
      }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between align-middle">
      <img
      className="w-36"
      src={LOGO}
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
