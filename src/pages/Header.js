import React from "react";
import "../components/css/Header.css";

const Header = () => {
  return (
    <header className="bg-orange-500 p-3 sm:p-4 lg:p-6 text-white text-center relative overflow-hidden">
      <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold animate-slide px-2">
        Welcome To Mekele Restaurant
      </h1>
      <div className="header-form">
        {/* Your form content goes here */}
        <p className="text-gray-200 text-sm sm:text-base hidden sm:block"></p>
        {/* Add your form fields, submit button, etc. */}
      </div>
    </header>
  );
};

export default Header;
