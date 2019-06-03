import React from "react";
import { Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
