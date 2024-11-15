import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className=" w-full h-screen bg-black text-white ">
      <div className="container h-full mx-auto">
        <Header />
        <main className="mt-6 sm:mt-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
