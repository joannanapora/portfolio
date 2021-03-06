import React, { useState } from "react";
import "./projects.css";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faPenSquare,
  faHandPointer,
  faRunning,
  faShoppingCart,
  faCat,
} from "@fortawesome/free-solid-svg-icons";
import { faSlack, faBitcoin } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div className="project-body">
      <div className="card">
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faShoppingCart}
        />
        <h1 className="project-header">Online Shop</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">
              Web Application
              <br />
              React/Javascript/Firebase/SASS
            </h1>

            <div className="body-text">
              Plants Shop is a fully functional React/JavaScript app based on
              SASS styles. During this project I got to know Firebase and how it
              handles authorization, I learned how to operate stripe in the test
              version. State is managed by Redux and navigation by React-Router.
              The website is fully responsive.
              <br />
              <br />
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href="https://plantshop-jo.herokuapp.com/"
              >
                GO TO PROJECT
              </a>
              <FontAwesomeIcon
                size="1x"
                color="#fff"
                icon={faHandPointer}
                style={{ marginTop: "-10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faSlack}
        />
        <h1 className="project-header">Slack Copy</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">
              Web Application
              <br />
              React/Javascript/Firebase/StyledComponents
            </h1>

            <div className="body-text">
              SlackCopy is a fully functional React/JavaScript application for
              developers to communicate. During this project I got to know how
              to store data and images in Firebase. The design is based on
              Styled Components. State is managed by Redux and navigation by
              React-Router. The website is desktops only but I'm working on its
              resposivity. <br />
              <br />
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href="https://slack-clone-jo.herokuapp.com/"
              >
                GO TO PROJECT
              </a>
              <FontAwesomeIcon
                size="1x"
                color="#fff"
                icon={faHandPointer}
                style={{ marginTop: "-10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faBrain}
        />
        <h1 className="project-header">Memory Game</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">React/Typescript</h1>
            <div className="body-text">
              During this project I got to know more about routing so the state
              is passed using React Router 'history' and 'location'. Since I
              know Redux I wanted to try something new. There are functions
              like:
              <p>??? drawing random pairs of cards</p>
              <p>??? shuffling cards</p>
              <p>??? revealing only two cards at a time</p>
              <p>??? matched cards dissapear</p>
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href="https://memo-game-jo.herokuapp.com/"
              >
                GO TO PROJECT
              </a>
              <FontAwesomeIcon
                size="1x"
                color="#fff"
                icon={faHandPointer}
                style={{ marginTop: "-10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faRunning}
        />
        <h1 className="project-header">Forest Run</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">
              Web Application
              <br />
              React/Typescript/GraphQL
            </h1>
            <div className="body-text">
              Forest Run is a fully functional React/Typescript application for
              runners in London. It is fully responsive. In this project I
              wanted to learn how to connect to the backend with GraphQL using
              Apollo Client. Styles are based on Material-UI. State is managed
              by Redux and navigation by React-Router. <br />
              <br />
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href="https://run-forest-demo.herokuapp.com/"
              >
                GO TO PROJECT
              </a>
              <FontAwesomeIcon
                size="1x"
                color="#fff"
                icon={faHandPointer}
                style={{ marginTop: "-10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faPenSquare}
        />
        <h1 className="project-header">Sudoku Game</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">React/Typescript</h1>
            <div className="body-text">
              This project is similar to Memory Game. I was practicing
              Typescript.
              <p>??? generate board with initial numbers</p>
              <p>??? cleaning checked field</p>
              <p>??? restarting game</p>
              <p>??? checking player's solution</p>
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href="https://sudoku-game-jo.herokuapp.com/"
              >
                GO TO PROJECT
              </a>
              <FontAwesomeIcon
                size="1x"
                color="#fff"
                icon={faHandPointer}
                style={{ marginTop: "-10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faBitcoin}
        />
        <h1 className="project-header">CoinTify</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">React/Typescript/Axios</h1>
            <div className="body-text">
              Cointify is a React/Typescript app for everyone who is interested
              in cryptocurrencies. It uses Axios to send GET requests to Rest
              API provided by CoinGecko.com to display current values of the
              coins. The design is based on Material-UI css library. Navigation
              is managed by React-Router. Application is not finished, the main
              purpose of the website is to send notifications directly to a
              user???s mobile device. <br />
              <a
                className="project-link"
                target="_blank"
                rel="noreferrer"
                href="https://cointify-jo.herokuapp.com/"
              >
                GO TO PROJECT
              </a>
              <FontAwesomeIcon
                size="1x"
                color="#fff"
                icon={faHandPointer}
                style={{ marginTop: "-10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
