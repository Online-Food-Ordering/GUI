// HomePage.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-semibold mb-4">
          Order Delicious Food Online
        </h1>
        <p className="text-gray-600 mb-6">
          Choose from a variety of cuisines and enjoy doorstep delivery.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/menu"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            View Menu
          </Link>
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Order Now
          </Link>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">New to our platform?</p>
          <Link to="/register" className="text-blue-500 hover:underline mr-4">
            Register here
          </Link>
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
