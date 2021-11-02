import React from "react";
import "./blog.css";
import newhere from "../assets/NEW ME.gif";
import tsjs from "../assets/tsjk.png";
import tail from "../assets/tailwind.jpg";
import reacthook from "../assets/react-hook-form.jpg";
import welcomeback from "../assets/welcomeback.gif";
import lr from "../assets/lr.jpg";
import node from "../assets/Node-js.jpg";

export const Post1 = () => {
  return (
    <div className="post-container">
      <div className="header-post">
        <h1>New Role</h1>
        <h1>2. October 2021, Manchester</h1>
      </div>
      <div className="blog-paragraph">
        <h1 className="blog-header">Hello Everyone!</h1>
        <div className="titleanddate">
          <img
            alt="hello"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
            width="50%"
            height="50%"
            src={newhere}
          />
          <p>
            During this month, I got to know all the rules of the daily stand
            up, sprint review and general organization of work on software
            implementation.From week to week, I learned more and more about the
            projects I was working on and I was entrusted with interesting
            tasks, even those that required the implementation of the backend.
          </p>
        </div>
        <div className="titleanddate">
          <p>
            One of the task worth mentioning was the initial setup that allowed
            us to migrate the project from javascript to typescript.After the
            changes, we can confidently continue our work in typescript without
            interfering with the javascript files.Using typescript we are
            highlighting unexpected behavior in code, lowering the chance of
            bugs.
          </p>
          <img
            alt="hello"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
            width="50%"
            height="50%"
            src={tsjs}
          />
        </div>
        <img
          alt="hello"
          style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
          width="100%"
          src={reacthook}
        />
        <p>
          Halfway through the month, I was able to work on a form for which the
          useForm hook was used.This is a great tool that allows you to build
          flexible and extensible forms with validation, reducing amount of code
          and unnecessary re-renders.
        </p>
        <div className="titleanddate">
          <p>
            {" "}
            While building the front end to the above form, I learned a new css
            library - Tailwind that allows you to write inline styles without
            leaving HTML. I liked it so much that it will be the basis of my
            styles for my next personal project.
          </p>
          <img
            alt="hello"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
            width="50%"
            height="50%"
            src={tail}
          />
        </div>
        <p>
          Every week I have the opportunity to catch up with the manager and
          discuss my education path, talk about news and take a moment away from
          duties. He prompted me to run this blog which will surely bear fruit
          in the future.Thanks Michael! 👏 October - I am ready! See you in a
          month! ╰(*°▽°*)╯
        </p>
      </div>
    </div>
  );
};

export const Post2 = () => {
  return (
    <div className="post-container">
      <div className="header-post">
        <h1>After 2 months</h1>
        <h1>1. November 2021, Manchester</h1>
      </div>
      <div className="blog-paragraph">
        <h1 className="blog-header">Hi again!</h1>
        <div className="titleanddate">
          <img
            alt="hello"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
            width="40%"
            height="40%"
            src={welcomeback}
          />
          <p>
            I will start with the fact that I started working on a new React
            project for which I will create a mobile application in React
            Native.
            <br />
            <br />
            The idea for the applications was born in mid-October, so far only a
            small part of the frontend and logging in are done. As I said in
            previous post - I decided to style my new app with Tailwind CSS. I
            plan to focus on this project and improve it every weekend. I will
            discuss more details in the December post and share my progress with
            you.
          </p>
        </div>
        <div className="titleanddate">
          <p>
            There is also a lot of news at work. I got access to the Log Rocket
            platform. For those who don't know, LogRocket helps fix bugs and
            understand user behavior by capturing logs and session recordings
            from the application. I found the problem much faster and saved a
            lot of time by focusing on a specific error.{" "}
          </p>

          <img
            alt="hello"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
            width="50%"
            height="50%"
            src={lr}
          />
        </div>
        <div className="titleanddate">
          <img
            alt="hello"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "2rem",
            }}
            width="50%"
            height="50%"
            src={node}
          />
          <p>
            This month I was also working on a big task that required me to work
            as much in the front end as in the backend. I was working on
            generating PDF files in NodeJS, I implemented the endpoint and all
            logic for storing data and the file itself. In the frontend, I added
            a redux state along with state transition from generate, load and
            download.
          </p>
        </div>
        <p>
          Besides, when working on new tasks I try to implement typescript,
          rewrite most jsx files. I have to say that working in the backend is a
          challenge for me, but I am very happy that, despite the front-end
          role, I have the opportunity to develop in it.
        </p>
        <div className="titleanddate">
          <p>See you in December!</p>
        </div>
      </div>
    </div>
  );
};
