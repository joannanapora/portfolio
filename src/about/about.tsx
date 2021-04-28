import React from "react";
import CustomButton from "../custom/custom-button";
import "./about.css";

const About = () => {
  const downloadCV = () => {};

  return (
    <div className="about">
      <div className="about-container">
        <div className="about-item-img">
          <div className="about-imgbox">
            <div className="about-btn-container">
              <CustomButton
                buttonSize="large"
                buttonStyle="primary"
                type=""
                onClick={downloadCV}
              >
                DOWNLOAD RESUME
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="about-item-img">
          <div className="about-imgbox">
            <img
              height="95%"
              width="95%"
              alt=""
              src="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/70026149_2390413564340730_1361607901025665024_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=84a396&_nc_ohc=nyAsCWIHapgAX-n9AxI&_nc_ht=scontent-lcy1-1.xx&oh=da7fc87c5c00b979861c239bbbeb7850&oe=60AE3048"
            ></img>
          </div>
        </div>
        <div className="about-item-img">
          <div className="about-imgbox"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
