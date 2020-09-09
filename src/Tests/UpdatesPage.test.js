import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UpdatesPage from "../Pages/UpdatesPage";

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
it("Renders UpdatesPage", () => {
    act(() => {
        render(<UpdatesPage />, container);
    });
    //expected return conditions, in this case it is rendered by not returning null as a container
    expect(container).toBeTruthy();
});