import React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
  getByText,
} from "@testing-library/react";
import NavBar from "../nav-bar/nav-bar";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

let wrapper: RenderResult;
const history = createMemoryHistory();

beforeEach(() => {
  wrapper = render(
    <Router history={history}>
      <NavBar />
    </Router>
  );
});

test("renders 3 navbar buttons", () => {
  wrapper.getByText("HOME");
  wrapper.getByText("PROJECTS");
  wrapper.getByText("ABOUT");
});

test("navigating works correct", () => {
  const Projects = wrapper.getByText("PROJECTS");
  fireEvent.click(Projects);
  expect(wrapper.getByText(/projects/i)).toBeInTheDocument();
  const About = wrapper.getByText("ABOUT");
  fireEvent.click(About);
  expect(wrapper.getByText(/about/i)).toBeInTheDocument();
});

test("buttons dissapear on mobile screen and hamburger menu appear", () => {
  const Hamburger = wrapper.getByTestId("hamburger-btn");
  fireEvent.click(Hamburger);
  const X = wrapper.getByTestId("x-btn");
  fireEvent.click(X);
});
