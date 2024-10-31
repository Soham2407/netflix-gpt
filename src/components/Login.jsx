import React, { useRef, useState } from "react";
import { validate } from "../utils/helper";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errors, setErrors] = useState({});

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInhandler = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorObj;

    if (isSignIn) {
      errorObj = validate(
        isSignIn,
        email.current.value,
        password.current.value
      );
      setErrors(errorObj);
    } else {
      errorObj = validate(
        isSignIn,
        email.current.value,
        password.current.value,
        fullName.current.value
      );
      setErrors(errorObj);
    }

    if (Object.keys(errorObj).length === 0) {
      let data;
      if (isSignIn) {
        data = {
          email: email.current.value,
          password: password.current.value,
        };
      } else {
        data = {
          fullName: fullName.current.value,
          email: email.current.value,
          password: password.current.value,
        };
      }
      console.log("onSubmit", data);
    }
  };

  return (
    <div className="max-w-lg bg-black p-4 mx-auto sm:p-12 md:p-16 lg:p-20 sm:rounded-lg sm:bg-[#000000b3]">
      <h1 className="font-bold text-4xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      <div className="w-full mt-8">
        <form className="w-full" onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="w-full">
              <input
                type="text"
                ref={fullName}
                placeholder="Full Name"
                className="w-full p-4 bg-transparent outline-none border text-white text-base border-gray-400 rounded-md"
              />
              <p className="py-1 text-red-500">{errors.fullName}</p>
            </div>
          )}
          <div className={`w-full ${!isSignIn ? "mt-4" : "mt-0"}`}>
            <input
              type="text"
              ref={email}
              placeholder="Email or mobile number"
              className="w-full p-4 bg-transparent outline-none border text-white text-base border-gray-400 rounded-md"
            />
            <p className="py-1 text-red-500">{errors.email}</p>
          </div>
          <div className="w-full mt-5">
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="w-full p-4 bg-transparent outline-none border text-white text-base border-gray-400 rounded-md"
            />
            <p className="py-1 text-red-500">{errors.password}</p>
          </div>
          <button className="w-full text-white py-2 text-center bg-red-600 mt-5 rounded-md">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="mt-5">
            <span className="text-gray-400">
              {isSignIn ? "New to Netflix?" : "Already have an account?"}
            </span>
            <span
              className="font-medium ml-1 hover:underline cursor-pointer"
              onClick={toggleSignInhandler}
            >
              {isSignIn ? "Sign up now" : "Sign in now"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
