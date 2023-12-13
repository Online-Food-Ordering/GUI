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
      <div className="bg-image-container p-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-center text-black">
          Order Delicious Food Online
        </h1>
        <p className="text-black mb-6 text-center">
          Choose from a variety of cuisines and enjoy doorstep delivery.
        </p>


          <div className="grid grid-cols-4 gap-6">
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
                <div className="link-container">
                  <Link
                    to={`/menu${index + 1}`}
                    className="link-button link-menu"
                  >
                    View Menu
                  </Link>
                  {isLoggedIn() ? (
                    <Link
                      to={`/order${index + 1}`}
                      className="link-button link-order"
                    >
                      Order Now
                    </Link>
                  ) : (
                    <div>
                      <p className="text-gray">You need to</p>
                      <Link to="/login" className="text-blue hover-underline mx-2">
                        login
                      </Link>
                      <span className="text-gray">or</span>
                      <Link to="/register" className="text-blue hover-underline mx-2">
                        register
                      </Link>
                      <span className="text-gray">to order.</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray">New to our platform?</p>
            <Link to="/register" className="text-blue hover-underline mx-2">
              Register here
            </Link>
            <span className="text-gray">or</span>
            <Link to="/login" className="text-blue hover-underline mx-2">
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
