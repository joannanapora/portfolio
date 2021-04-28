import React, { useEffect, useState } from "react";
import "./links.css";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";
import { ReactComponent as CodeWars } from "../assets/codewars.svg";

const Links = () => {
  const [showUrl, setShowUrl] = useState<string>("");

  const showLink = (id: string) => {
    console.log("show");
    setShowUrl(id);
  };
  const hideLink = () => {
    setShowUrl("");
  };

  return (
    <div className="links">
      <div className="link-container">
        <div>
          <h1 className="link-header">LinkedIn</h1>
          <a target="_blank" href="https://www.linkedin.com/in/joanna-napora">
            <div
              onMouseEnter={() => showLink("linkedin")}
              onMouseLeave={hideLink}
              className="icon"
            >
              <LinkedIn />
            </div>
          </a>
        </div>
        <div>
          <h1 className="link-header">GitHub</h1>
          <a target="_blank" href="https://github.com/joannanapora">
            <div
              onMouseEnter={() => showLink("github")}
              onMouseLeave={hideLink}
              className="icon"
            >
              <GitHub />
            </div>
          </a>
        </div>
        <div>
          <h1 className="link-header">CodeWars</h1>
          <a target="_blank" href="https://www.codewars.com/users/joannanapora">
            <div
              onMouseEnter={() => showLink("codewars")}
              onMouseLeave={hideLink}
              className="icon"
            >
              <CodeWars />
            </div>
          </a>
        </div>
      </div>
      {showUrl === "linkedin" && (
        <h1 className="link-url">https://www.linkedin.com/in/joanna-napora</h1>
      )}
      {showUrl === "github" && (
        <h1 className="link-url">https://github.com/joannanapora</h1>
      )}
      {showUrl === "codewars" && (
        <h1 className="link-url">
          https://www.codewars.com/users/joannanapora
        </h1>
      )}
    </div>
  );
};

export default Links;
