import React from "react";
import ReactDOM from "react-dom";
import ContextState from "./context_state_config";
import { configureFakeBackend } from "./utils/fake-backend";
import "@fortawesome/fontawesome-free/css/all.min.css";
// configureFakeBackend();
ReactDOM.render(<ContextState />, document.getElementById("root"));
