import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reduxApp from './REDUX/TP1/index';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <reduxApp/>
);

