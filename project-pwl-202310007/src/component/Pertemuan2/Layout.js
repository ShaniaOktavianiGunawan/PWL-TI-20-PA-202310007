import React from "react";

export default function Layout(props) {
  return (
    <div
      className="d-flex flex-column flex-root vh-100"
      style={{ backgroundColor: "blue" }}
    >
      <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          <h1 className="mb-12 text-white text-center my-4">{props.title}</h1>
          <br />
          <div className="w-75 bg-body rounded shadow-sm p-4 p-lg-15 mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
