import React from "react";
import "./banner.scss";
import { images } from "../../images";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div>
      <div className="insurance-category">
        <div className="container">
          <h2 className="title1 title1--mod">Types of Insurance We Provide: </h2>
          <div className="insurance-category__content">
            <div className="category1">
              <Link to="/dependent-list">
                <img src={images.category1} alt="" />
              </Link>
              <h3>Health Insurance</h3>
              <p>Health Insurance is like a saftey net for the wellbeing. Its a financial cushion that catches you when unexpected health challenges knock you off your feet.Click the icon to know our plans for you :)
              </p>
            </div>
            <div className="category2">
              <Link to="/vehicle-insurance">
                <img src={images.category2} alt="" />
              </Link>
              <h3>Vehicle Insurance</h3>
              <p>Vehicle Insurance is like a security blanket for your vehicles, ensuring that you are covered in the unpredictable journey of life on road.Click the icon to know our plans for you :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;