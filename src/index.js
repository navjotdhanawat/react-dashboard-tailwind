import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureFakeBackend } from "./utils/fake-backend";
import './styles.css' // <- change './index.css' to './styles.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
// configureFakeBackend();
ReactDOM.render(<App />, document.getElementById("root"));
