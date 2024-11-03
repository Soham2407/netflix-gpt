import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className=" w-full h-screen bg-black sm:relative sm:isolate sm:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg')] sm:bg-cover sm:bg-no-repeat sm:bg-center sm:after:content-[''] sm:after:absolute sm:after:inset-0  sm:after:bg-black sm:after:z-[-1] sm:after:opacity-60 text-white ">
      <div className="container h-full mx-auto">
        <Header />
        <main className="mt-6 sm:mt-8">
          <Login />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
