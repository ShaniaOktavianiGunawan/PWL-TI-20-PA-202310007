import React from "react";
import notFound from "../../../../img/errorImg.svg";

const Error = () => {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <img src={notFound} alt="404 Not Found" style={{ width: "40%" }} />
      <h5> page notFound</h5>
    </div>
  );
};

export default Error;
