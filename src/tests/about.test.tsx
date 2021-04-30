import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import About from "../about/about";
import { BrowserRouter } from "react-router-dom";
import { execPath } from "process";

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
});

test("renders image", () => {
  wrapper.getByTestId("image");
});

test("renders button for download resume", () => {
  wrapper.getByText("DOWNLOAD RESUME");
});

test("renders `about me` text", () => {
  wrapper.getByText(
    "My name is Joanna. I'm 27 years old. I live in Manchester.",
    { exact: false }
  );
});

test("renders facebook, linkedin, github buttons and shows tooltips on hover", () => {
  const social1 = wrapper.getByTestId("linkedin");
  fireEvent.click(social1);
  wrapper.getByText("LinkedIn");
  const social2 = wrapper.getByTestId("github");
  fireEvent.click(social2);
  wrapper.getByText("GitHub");
  const social3 = wrapper.getByTestId("facebook");
  fireEvent.click(social3);
  wrapper.getByText("Facebook");
});
