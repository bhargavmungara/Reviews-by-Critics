import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import Review from "./Review";

const App = () => {
  return (
    <div>
      <h1>Random reviews by NyTimes</h1>

      <Review />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
