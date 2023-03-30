import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const obj = {
    email: "",
    password: "",
  };
  const [successLogin, setsuccessLogin] = useState(false);
  const [login, setlogin] = useState(obj);

  const handlesubmit = (e) => {
    e.preventDefault();
    const email = login.email;
    const password = login.password;
    if (email === "tavokta@gmail.com" && password === "kepow") {
      localStorage.setItem("isLogin", true);
      setsuccessLogin(true);
    } else {
      alert("login gagal periksa kembali password dan email mu ");
    }
  };
  return successLogin ? (
    <Navigate to="/home" replace={true} />
  ) : (
    <div className="d-flex align-items-center vh-100">
      <div className="card m-auto " style={{ width: "35rem" }}>
        <div className="card-body ">
          <form onSubmit={handlesubmit}>
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="Email"
              className="form-control"
              id="inputEmail4"
              required
              onChange={(e) => setlogin({ ...login, email: e.target.value })}
            />

            <label for="inputPassword4" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              required
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
            />
            <br />
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
