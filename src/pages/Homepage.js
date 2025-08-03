// HomePage.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import "../components/css/HomePage.css"; // Import the CSS file
import image1 from "../components/images/image1.jpeg";
import image2 from "../components/images/image2.jpeg";
import image3 from "../components/images/image3.jpeg";
import image4 from "../components/images/image4.jpeg";
import image5 from "../components/images/image5.jpeg";
import image6 from "../components/images/image6.jpeg";
import image7 from "../components/images/image7.jpeg";
import image8 from "../components/images/image8.jpeg";

const HomePage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  const handleImageHover = (index) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <Layout>
      <div className="bg-image-container p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-center text-black">
          Order Delicious Food Online
        </h1>
        <p className="text-black mb-4 sm:mb-6 text-center text-sm sm:text-base">
          Choose from a variety of cuisines and enjoy doorstep delivery.
        </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`image-container ${
                    hoveredImage === index ? "transform scale-110" : "transform scale-100"
                  }`}
                  onMouseEnter={() => handleImageHover(index)}
                  onMouseLeave={handleImageLeave}
                />
                <div className="link-container flex-col sm:flex-row gap-2 sm:gap-0">
                  <Link
                    to={`/menu${index + 1}`}
                    className="link-button link-menu text-xs sm:text-sm flex-1"
                  >
                    View Menu
                  </Link>
                  {isLoggedIn() ? (
                    <Link
                      to={`/order${index + 1}`}
                      className="link-button link-order text-xs sm:text-sm flex-1"
                    >
                      Order Now
                    </Link>
                  ) : (
                    <div className="text-center sm:text-left mt-2 sm:mt-0">
                      <p className="text-gray text-xs sm:text-sm">You need to</p>
                      <Link to="/login" className="text-blue hover-underline mx-1 text-xs sm:text-sm">
                        login
                      </Link>
                      <span className="text-gray text-xs sm:text-sm">or</span>
                      <Link to="/register" className="text-blue hover-underline mx-1 text-xs sm:text-sm">
                        register
                      </Link>
                      <span className="text-gray text-xs sm:text-sm">to order.</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-gray text-sm sm:text-base">New to our platform?</p>
            <Link to="/register" className="text-blue hover-underline mx-2 text-sm sm:text-base">
              Register here
            </Link>
            <span className="text-gray text-sm sm:text-base">or</span>
            <Link to="/login" className="text-blue hover-underline mx-2 text-sm sm:text-base">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const isLoggedIn = () => {
  return false;
};

export default HomePage;
