import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/nav-bar";
import "./App.css";
import Home from "./home/home";
import Projects from "./projects/projects";
import About from "./about/about";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
