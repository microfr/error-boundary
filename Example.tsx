import React from "react";
import { render } from "react-dom";
import ErrorBoundary from "./src";

const NODE = document.querySelector("#app");

render(
  <ErrorBoundary renderOnError={() => <div>Oh no! An error!</div>}>
    Hello world!
  </ErrorBoundary>,
  NODE
);
