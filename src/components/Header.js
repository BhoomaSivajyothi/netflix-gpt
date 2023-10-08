import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/Userslice";

const Header = () => {
  const dispatch = useDispatch();
  const newuser = useSelector((store) => store.User);
  console.log("redux", newuser);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);

  return (
    <div className="w-screen flex justify-between m-2 px-8 py-2 absolute bg-gradient-to-b from-black z-10">
      <img
        className="h-14"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      {newuser && (
        <div className="flex">
          <img src={newuser?.photoURL} alt="signout" className="w-11 h-8"></img>
          <button className="text-white" onClick={handleSignout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
