import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Projects from "../projects/projects";

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(<Projects />);
});

test("renders 4 project cards", () => {
  wrapper.getByText("Memory Game");
  wrapper.getByText("Online Shop");
  wrapper.getByText("Sudoku Game");
  wrapper.getByText("Data Display");
});

test("card reveal content on click and redirect user to project in new tab", () => {
  const Memory = wrapper.getByText("Memory Game", { exact: true });
  fireEvent.click(Memory);
  wrapper.getByText("React/Typescript");
  const Project = wrapper.getByText("GO TO PROJECT");
  fireEvent.click(Project);
  expect(Project).toHaveAttribute(
    "href",
    "https://memo-game-jo.herokuapp.com/"
  );
});

test("card reveal content on click and redirect user to project in new tab", async () => {
  const Sudoku = wrapper.getByText("Sudoku Game");
  fireEvent.click(Sudoku);
});

test("card reveal content on click and redirect user to project in new tab", async () => {
  const DisplayData = wrapper.getByText("Data Display");
  fireEvent.click(DisplayData);
});

test("card reveal content on click and redirect user to project in new tab", async () => {
  const OnlineShop = wrapper.getByText("Online Shop");
  fireEvent.click(OnlineShop);
});
