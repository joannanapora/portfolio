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
          spent my time mainly increasing my knowledge of React, JavaScript
          and TypeScript, creating various projects, solving complex tasks and
          taking Udemy courses on these topics. To broaden my general knowledge
          I'm taking the Introduction to Computer Sience course by edx. Besides
          I can write unit and functional tests using Jest, Enzyme and React
          Testing Library but also end to end tests in Selenium.
          <br />
          <br />
          At this point, my goal is to gain my first commercial experience in
          the IT industry, I am open to any form of learning through work,
          including apprenticeships, internships and junior positions in
          Manchester area or remote. Thank you for visiting my website!
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/p0rczi"
            >
              <div className="iconca" data-testid="facebook">
                <div className="tooltip">Facebook</div>
                <span>
                  <FontAwesomeIcon className="fa-social" icon={faFacebookF} />
                </span>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/joannanapora"
            >
              <div className="iconca" data-testid="github">
                <div className="tooltip"> GitHub</div>
                <span>
                  <FontAwesomeIcon className="fa-social" icon={faGithub} />
                </span>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/joanna-napora"
            >
              <div className="iconca" data-testid="linkedin">
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
        data-testid="image"
        className="img-me"
        alt="Janna Napora"
        src="https://i.ibb.co/stL0KS9/Screenshot-2021-06-04-at-11-49-11.png"
      ></img>
    </div>
  );
};
export default About;
