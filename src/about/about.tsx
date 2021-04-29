import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../custom/custom-button";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const downloadCV = () => {
    window.location.href = "./assets/RESUME JN.pdf";
  };

  return (
    <div className="wrapper">
      <div className="img-info">
        <h1>Hello!</h1>
        <p>
          My name is Joanna. I'm 27 years old. I live in Manchester.
          <br />
          <br />
          I have been programming for about 10 months now and I don't slow down
          for a minute. I am a self-taught programmer and huge React fan so I
          spent my time mainly increasing the knowledge of React, JavaScript
          and TypeScript, creating various projects, solving complex tasks and
          taking Udemy courses on these topics. To broaden my general knowledge,
          I take the Introduction to Computer Sience course by edx. Besides, I
          can write unit and functional tests using Jest, Enzyme and React
          Testing Library but also end to end tests in Selenium.
          <br />
          <br />
          At this point, my goal and dream is to gain my first experience in the
          IT industry, I am open to any form of learning through work, including
          apprenticeships, internships and junior positions.
        </p>
        <div className="btn-cont">
          <Link to="resume.pdf" target="_blank" download>
            <CustomButton
              buttonSize="large"
              buttonStyle="primary"
              type="submit"
            >
              <FontAwesomeIcon className="download-icon" icon={faDownload} />
              DOWNLOAD RESUME
            </CustomButton>
          </Link>
        </div>
        <div className="social-container">
          <div className="social-wrapper">
            <a target="_blank" href="https://www.facebook.com/p0rczi">
              <div className="iconca">
                <div className="tooltip">Facebook</div>
                <span>
                  <FontAwesomeIcon className="fa-social" icon={faFacebookF} />
                </span>
              </div>
            </a>
            <a target="_blank" href="https://github.com/joannanapora">
              <div className="iconca">
                <div className="tooltip"> GitHub</div>
                <span>
                  <FontAwesomeIcon className="fa-social" icon={faGithub} />
                </span>
              </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/joanna-napora">
              <div className="iconca">
                <div className="tooltip">LinkedIn</div>
                <span>
                  <FontAwesomeIcon className="fa-social" icon={faLinkedin} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <img
        className="img-me"
        alt="Janna Napora"
        src="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/70026149_2390413564340730_1361607901025665024_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=84a396&_nc_ohc=nyAsCWIHapgAX-n9AxI&_nc_ht=scontent-lcy1-1.xx&oh=da7fc87c5c00b979861c239bbbeb7850&oe=60AE3048"
      ></img>
    </div>
  );
};
export default About;
