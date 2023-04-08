import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "react-datepicker/dist/react-datepicker.css";

import { BrowserRouter } from "react-router-dom";
// import AppRoute from "./component/pertemuan-3/apps/AppRoute";
// import Login from "./component/pertemuan-3/layouts/components/Login/Login";
import AppRoute from "./component/pertemuan-4/apps/routes/AppRoute";

const { PUBLIC_URL } = process.env;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Biodata /> */}
    {/* <Widget /> */}
    {/* <DataMultiple /> */}
    <BrowserRouter basename={PUBLIC_URL}>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
