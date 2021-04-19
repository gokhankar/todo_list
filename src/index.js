import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/alertifyjs/build/css/alertify.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
