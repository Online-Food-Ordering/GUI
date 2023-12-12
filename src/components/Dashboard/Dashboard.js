import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to the Dashboard!
        </h1>
        <p className="text-green-600">You are successfully logged in!</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
