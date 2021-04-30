import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Home from "../home/home";

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(<Home />);
});

test("renders Home text", () => {
  wrapper.getByText("HI, I'M JOANNA!");
});

test("renders banner svg", () => {
  wrapper.getByTestId("banner");
});
