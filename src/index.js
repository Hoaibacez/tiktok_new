import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import 'overlayscrollbars/css/OverlayScrollbars.css';

import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/global.scss";

//API config
axios.defaults.baseURL = "https://tiktok.f8team.dev";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
