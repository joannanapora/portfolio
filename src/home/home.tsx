import React from "react";
import { ReactComponent as RoleBaner } from "./role.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="introduction">
      <h1 className="head1">HI, I'M JOANNA!</h1>
      <RoleBaner className="jrd" />
      <h3 className="head2">"git checkout -b build/new-career-path"</h3>
    </div>
  );
};

export default Home;
