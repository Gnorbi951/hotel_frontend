import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from 'axios';

axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        config.withCredentials = true;
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
