import React from "react";
import "./blog.css";
import newhere from "../assets/NEW ME.gif";
import tsjs from "../assets/tsjk.png";
import tail from "../assets/tailwind.jpg";
import reacthook from "../assets/react-hook-form.jpg";
import welcomeback from "../assets/welcomeback.gif";
import lr from "../assets/lr.jpg";
import node from "../assets/Node-js.jpg";
import mandril from "../assets/mandrill.jpeg";
import mysql from "../assets/mysqll.jpeg";
import pdflib from "../assets/pdflib.jpg";
import alpine from "../assets/alpine.jpeg";
import full from "../assets/full.jpg";
import next from "../assets/next.png";
import testing from "../assets/testing.jpg";

export const Post1 = () => {
  return (
    <div className="post-container">
      <div className="header-post">
        <h1>New Role</h1>
        <h1>2. October 2021, Manchester</h1>
      </div>
      <div className="blog-paragraph">
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
            Hello Everyone!
            <br/>
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

export const Post3 = () => {
  return (
    <div className="post-container">
      <div className="header-post">
        <h1>5 months</h1>
        <h1>4. February 2022, Manchester</h1>
      </div>
      <div className="blog-paragraph">
        <p>
          {" "}
          I delayed writing the post because I went to my family home for
          Christmas. November was a very busy month in which a lot was going on
          and in which I did many things for the first time. 3 of the 6 months
          of my probationary period passed on the last day of November.
        </p>
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
            src={mandril}
          />
          <p>
            At the beginning of the month I had the opportunity to work with a
            mandrill which is a delivery API for the MailChimp email platform
            that is used to send data-driven emails. My task was to create an
            e-mail template to which the entered data was inserted, and then
            send it to a specific e-mail address.
          </p>
        </div>
        <div className="titleanddate">
          <p>
            In the middle of a month I was working on a very nice tool that
            required me to work with three databases at the same time. I was
            working in project created with NodeJS so I was using pure
            JavaScript and little bit of jQuery to write all the views and
            functionalities. I was writing SELECT queries in both MySQL and
            PostgreSQL and INSERT queries to save data in new column. To
            interact with PostgreSQL database I was using DBeaver which is a SQL
            client software application and a database administration tool. I
            had very little contact with databases before so it was challenging
            and very rewarding.
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
            src={mysql}
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
            src={pdflib}
          />
          <p>
            At the end of November I got a task to create a pdf template on
            which the photo added by the user and his data are displayed. All
            elements had to be added dynamically, ensuring that the photo does
            not exceed dimensions and has good quality. The file is then saved
            to the backend in the ID Card format. I used the PDF-lib library for
            this which provides a lot of functions
          </p>
        </div>
        <p>
          I didn’t work much in December so lets skip to January. First half of
          the month I was working on rebuilding our main page. My task was to
          remove all implemented jQuery and replace it where possible with
          JavaScript and AlpineJS. I’m new to Alpine js but after few days with
          this framework I could say its really really simple and helpful when
          you just need to handle small amount of animations. Due to the greater
          number of other tasks, I had to give up the task for a while, but I
          may be able to come back with yet another approach.
        </p>
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
            src={alpine}
          />
          <p>
            Recently, I work a lot with forms, using code that already exists,
            but I also have the opportunity to prove myself in creating
            something completely new for specific requirements.
            <br/>
            <br/>
            See you in March!
          </p>
        </div>
      </div>
    </div>
  );
};

export const Post4 = () => {
  return (
    <div className="post-container">
      <div className="header-post">
        <h1>Fullstack!</h1>
        <h1>7. March 2022, Manchester</h1>
      </div>
      <div className="blog-paragraph">
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
            src={full}
          />
          <p>
            I have great news, my probationary period at work ended on March 1.
            My contract has been extended and from the position of Junior
            Frontend Developer I have become Junior Full Stack Developer!
            <br/>  <br/> 
            I am so excited and looking forward to what the next months will bring!
          </p>
        </div>
        <div className="titleanddate">
          <p>
            As I mentioned in the last post, I was working on the modernization
            of our main site. I really wanted to change the approach to the task
            and, fortunately, I received a green light to rewrite the website
            for job search in Reat, using the NEXT.js.
            <br />
            <br />I had very little to do with this framework, but it is
            definitely the best framework that could be chosen due to my
            experience with react, but also due to server side rendering. I got
            acquainted with the rules of next js very quickly and the work was
            very rewarding.
          </p>
          <img
            alt="hello"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
              marginTop: "4rem",
            }}
            width="40%"
            height="40%"
            src={next}
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
            width="30%"
            height="30%"
            src={testing}
          />
          <p>
            Besides, I am constantly learning backend stuff, writing tests for
            private projects and I try to spend some free time on programming!
            <br />
            <br />
            See you in April!
          </p>
        </div>
      </div>
    </div>
  );
};
