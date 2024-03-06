import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
// App
import App from "./app/App"
// MDI
import '@mdi/font/css/materialdesignicons.css';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
