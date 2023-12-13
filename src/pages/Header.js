import React from "react";
import "../components/css/Header.css";

const Header = () => {
  return (
    <header className="bg-orange-500 p-4 text-white text-center relative overflow-hidden">
      <h1 className="text-2xl font-semibold animate-slide">Welcome To Mekele Restaurant</h1>
      <div className="header-form">
        {/* Your form content goes here */}
        <p className="text-gray-600"></p>
        {/* Add your form fields, submit button, etc. */}
      </div>
    </header>
  );
};

export default Header;
