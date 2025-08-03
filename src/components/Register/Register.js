import React, { useState } from "react";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [currentUser, setCurrentUser] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitRegistration = (e) => {
    console.log("Registration Data", formData);
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      })
      .then(function (res) {
        console.log("Registration Succesfull");
        setCurrentUser(true);
      })

      .catch(function (error) {
        console.error("Registration error:", error.response.data.error);
        // Display the error message to the user on the frontend
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-4 sm:p-6 lg:p-8 rounded-md shadow-lg">
        <div>
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            Create an Account
          </h2>
        </div>
        <form className="mt-4 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={submitRegistration}>
          <div className="rounded-md shadow-sm space-y-3 sm:-space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="appearance-none rounded-md sm:rounded-none relative block w-full px-3 py-3 sm:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-md sm:rounded-none relative block w-full px-3 py-3 sm:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-md sm:rounded-none relative block w-full px-3 py-3 sm:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none rounded-md sm:rounded-none relative block w-full px-3 py-3 sm:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-40 flex justify-center py-3 sm:py-2 px-4 border border-transparent text-base sm:text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
