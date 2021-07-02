import React, { useState } from "react";
import "./projects.css";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faPenSquare,
  faHandPointer,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import { faSlack, faBitcoin } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [expand, makeExpand] = useState<string>("");

  const onExpand = (name: string) => {
    makeExpand(name);
  };

  return (
    <div className="project-body">
      <div className="card expanded" onClick={() => onExpand("slack")}>
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
              React/Javascript/Firebase
            </h1>

            <div className="body-text">
              SlackCopy is a fully functional React/JavaScript application for
              developers to communicate. It is connected to Firebase when all
              the messages and images are stored. The design is based on Styled
              Components. State is managed by Redux and navigation by
              React-Router. <br />
              <br /> Chat is working in real-time. You can see notifications
              about unread messages, upload images and send them to others. For
              now SlackCopy is designed for desktop only.
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
        <Arrow />
      </div>
      <div className="card expanded" onClick={() => onExpand("memory")}>
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
              <p>• drawing random pairs of cards</p>
              <p>• shuffling cards</p>
              <p>• revealing only two cards at a time</p>
              <p>• matched cards dissapear</p>
              <p>
                • winner screen shows time result and number of moves (the state
                is passed using Router history and location)
              </p>
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
        <Arrow />
      </div>
      <div className="card expanded" onClick={() => onExpand("api")}>
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
              runners in London It uses Apollo Client to communicate with the
              GraphQL server. The design is based on Material-UI css library.
              State is managed by Redux and navigation by React-Router. <br />
              <br /> There are functions like: log in/sign in, change between
              light and dark modes, creating event cards, writing articles,
              joining and leaving specific events, filtering events and
              articles, donating the website (using Stripe).
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
        <Arrow />
      </div>
      <div className="card expanded" onClick={() => onExpand("online-shop")}>
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
              <p>• generate board with initial numbers</p>
              <p>• cleaning checked field</p>
              <p>• restarting game</p>
              <p>• checking player's solution</p>
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
        <Arrow />
      </div>
      <div className="card expanded" onClick={() => onExpand("sudoku")}>
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faBitcoin}
        />
        <h1 className="project-header">CoinTify</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">React/Typescript</h1>
            <div className="body-text">
              Cointify is a React/Typescript application (still in progress) for
              everyone who is interested in cryptocurrencies. It uses Axios to
              send GET requests to Rest API provided by CoinGecko.com to display
              current values of the coins. The design is based on Material-UI
              css library. Navigation is managed by React-Router. Application is
              not finished, the main purpose of the website is to send
              notifications directly to a user’s mobile device. <br />
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
        <Arrow />
      </div>
    </div>
  );
};

export default Projects;
