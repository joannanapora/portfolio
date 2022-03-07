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
          My name is Joanna. I'm 28 and I live in
          Manchester.
          <br />
          <br />
          I have been programming for about 1,5 year now. I am a self-taught
          programmer and huge React fan so I spent my time mainly increasing my
          knowledge of React, JavaScript and Node.js, creating personal
          projects, solving complex tasks and taking Udemy courses on these
          topics.
          <br />
          <br />
          From 1st of September 2021 I have worked as a Junior Frontend Developer for one of the UK’s
          leading recruitment agencies.
          On 1st of March 2022 I have been promoted to Junior Fullstack Developer position in the very same company.
          <br/>
          <br/>  
I run a blog in which I write about everything I do at work, I encourage you to take a look! :)
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
