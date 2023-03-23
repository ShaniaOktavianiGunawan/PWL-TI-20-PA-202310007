import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataDiri from "./component/DataDiri";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "react-datepicker/dist/react-datepicker.css";
import StickyNotes from "./component/StickyNotes";
import Biodata from "./component/Biodata";
import Widget from "./component/Pertemuan2/Widget";
import DataMultiple from "./component/Pertemuan2/DataMultiple";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Biodata /> */}
    {/* <Widget /> */}
    <DataMultiple />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
