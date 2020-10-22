import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { icons } from './assets/icons'
import { configureFakeBackend } from "./utils/fake-backend";

import { Provider } from 'react-redux'
import store from './store/index'



React.icons = icons
// configureFakeBackend();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
