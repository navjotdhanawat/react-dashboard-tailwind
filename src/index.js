import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { icons } from './assets/icons'
import { configureFakeBackend } from "./utils/fake-backend";
// import './styles.css' // <- change './index.css' to './styles.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Provider } from 'react-redux'
import store from './store'



React.icons = icons
// configureFakeBackend();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
