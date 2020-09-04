import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import KDANavbar from "../Components/KDANavbar";
import CNIRegulationForm  from "../Components/CreateNewItemRegulationForm"
import { RegulationsDisplay } from "../Components/RegulationsDisplay";
import {TestCarrots} from "../Data/TestData"
//Link to documentation: https://reactjs.org/docs/testing-recipes.html

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Name of test
it("Renders Page/Component", () => {
  const item = TestCarrots;
  act(() => {
    render(<KDANavbar item={item} />, container);
  });
  //expected return conditions, in this case it is rendered by not returning null as a container
  expect(container).toBeTruthy();
  //test will fail, use as reference for data testing in a div
  expect(
    container.querySelector("[data-testid='form']").getAttribute("name")
  ).toEqual(TestCarrots);
}); // end of test
//See documentation for more test examples. If you want to create additional test files
//  follow the following format

//Test Values if applicable
//Test Events such as OnClick or redirects to other pages