import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import { NETFLIX_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch()

  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorUserMsg, setErrorUserMsg] = useState(null);

  const handleValidation = () => {
    //validation
    const errorMsg = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMsg);
    //if validation fails will return
    if (errorMsg) return;
    //if signup will create user
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorUserMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorUserMsg(errorCode + "-" + errorMessage);
        });
    }
    //if signin will login user
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorUserMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src ={NETFLIX_BG}
          alt="background"
        />
      </div>
      <div
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <p className="text-red-500 font-bold">{errorUserMsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h4 className="py-4 cursor-pointer" onClick={handleSignInForm}>
          {isSignInForm
            ? "New to NetFlix ? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </h4>
      </div>
    </div>
  );
};

export default Login;
