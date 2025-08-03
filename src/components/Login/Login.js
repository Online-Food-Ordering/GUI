// src/components/Login.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitLogin = (e) => {
    console.log("Login Data", formData);
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", {
        email: formData.email,
        password: formData.password,
      })
      .then(function (res) {
        console.log("Login Succesfull");
        setCurrentUser(true);
        history.push("/Dashboard"); // Update this path with your desired redirect path
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
            Log in to your account
          </h2>
        </div>
        <form className="mt-4 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={submitLogin}>
          <div className="rounded-md shadow-sm space-y-3 sm:-space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                value={formData.email}
                required
                className="appearance-none rounded-md sm:rounded-none relative block w-full px-3 py-3 sm:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base sm:text-sm"
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
                onChange={handleChange}
                value={formData.password}
                autoComplete="current-password"
                required
                className="appearance-none rounded-md sm:rounded-none relative block w-full px-3 py-3 sm:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-40 flex justify-center py-3 sm:py-2 px-4 border border-transparent text-base sm:text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
