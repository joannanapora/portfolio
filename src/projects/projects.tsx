import React, { useEffect, useState } from "react";
import "./projects.css";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faPenSquare,
  faShoppingCart,
  faChartLine,
  faCircle,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [expand, makeExpand] = useState<string>("");

  const onExpand = (name: string) => {
    makeExpand(name);
  };

  const dot = () => {
    return (
      <FontAwesomeIcon
        size="xs"
        style={{ paddingRight: "4px" }}
        color="#fff"
        icon={faCircle}
      />
    );
  };

  return (
    <div className="project-body">
      <div
        className={expand === "memory" ? "card expanded" : "card"}
        onClick={() => onExpand("memory")}
      >
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
              <p>{dot()}React Router</p>
              <p>{dot()}SASS</p>
              <p>{dot()}Jest</p>
              <p>{dot()}React Testing Library</p>
              <a
                className="project-link"
                target="_blank"
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
      <div
        className={expand === "sudoku" ? "card expanded" : "card"}
        onClick={() => onExpand("sudoku")}
      >
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faShoppingCart}
        />
        <h1 className="project-header">Online Shop</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">Project in progress...</h1>
            <div className="body-text">(...)</div>
          </div>
        </div>
        <Arrow />
      </div>
      <div
        className={expand === "online-shop" ? "card expanded" : "card"}
        onClick={() => onExpand("online-shop")}
      >
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faPenSquare}
        />
        <h1 className="project-header">Sudoku Game</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">Project in progress...</h1>
            <div className="body-text">(...)</div>
          </div>
        </div>
        <Arrow />
      </div>
      <div
        className={expand === "api" ? "card expanded" : "card"}
        onClick={() => onExpand("api")}
      >
        <FontAwesomeIcon
          size="9x"
          color="#fff"
          style={{ padding: "1rem" }}
          icon={faChartLine}
        />
        <h1 className="project-header">Data Display</h1>
        <div className="text1">
          <div className="text-content">
            <h1 className="title">Project in progress...</h1>
            <div className="body-text">(...)</div>
          </div>
        </div>
        <Arrow />
      </div>
    </div>
  );
};

export default Projects;
