import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/css/Styes.css";
import TimeProvider from "./context/TimeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TimeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TimeProvider>
);
