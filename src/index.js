import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./stylesheets/App.scss";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter className="app">
    <App className="app" />
  </HashRouter>,
  document.getElementById("root")
);
