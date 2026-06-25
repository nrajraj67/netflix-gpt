import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-48 m-6 "
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      <form className="w-4/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white opacity-80 rounded-lg">
        <h1 className="text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full text-base bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full text-base bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full text-base bg-gray-700 rounded-lg"
        />
        <button className="p-3 my-6 text-base bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-3 text-base cursor-pointer" onClick={handleSignIn}>
          {isSignInForm
            ? "New to NetFlix ? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
