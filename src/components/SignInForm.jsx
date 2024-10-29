import React from "react";

const SignInForm = () => {
  return (
    <div className="max-w-lg mx-auto p-20 rounded-lg bg-[#000000b3]">
      <h1 className="font-bold text-4xl">Sign In</h1>
      <div className="w-full mt-8">
        <form className="w-full">
          <div className="w-full">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="w-full p-4 bg-transparent outline-none border text-white text-base border-gray-400 rounded-md"
            />
          </div>
          <div className="w-full mt-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 bg-transparent outline-none border text-white text-base border-gray-400 rounded-md"
            />
          </div>
          <button className="w-full text-white py-2 text-center bg-red-600 mt-4 rounded-md">
            Sign In
          </button>
          <p className="text-center my-3 text-gray-400">OR</p>
          <button className="w-full text-white py-2 text-center bg-gray-600 rounded-md">
            Use a sign-in code
          </button>
          <p className="text-center my-3 text-white">Forgot password?</p>
          <div className="flex items-center gap-2 my-3">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div>
            <span className="text-gray-400">New to Netflix?</span>
            <span className="font-medium ml-1">Sign up now</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
