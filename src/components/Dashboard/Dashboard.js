import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full p-6 sm:p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center text-gray-900">
          Welcome to the Dashboard!
        </h1>
        <p className="text-green-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">
          You are successfully logged in!
        </p>
        <div className="flex justify-center">
          <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 sm:py-2 px-6 sm:px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
