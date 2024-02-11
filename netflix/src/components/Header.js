import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const userData = useSelector((state) => state.user);
  const gptSearch = useSelector((state) => state.gptSearch.showGptSearch);
  // console.log(userData)
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    // when ever auth state changed sign / sign up or sigh out it will handle here only
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
        navigate("/browse");
      } else {
        dispath(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when coponent unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispath(toggleGptSearch())
  }

  const changeHandler = (e) => {
    dispath(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between align-middle">
      <img className="w-36" src={LOGO} alt="logo-img" />
      {userData && (
        <div className="pt-2 flex">
       {gptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={changeHandler}>
            {
                SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))
            }
        </select>}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {gptSearch ? 'Home Page' : 'Gpt Search'}
          </button>
          <img className="w-8 h-8" src={userData.photoURL} alt="user-img" />
          <button
            className="border  border-black text-white font-bold p-2 rounded-lg"
            onClick={signOutHandler}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
