import React, { useEffect, useState } from "react";
import { Form } from "./Form";

import axios from "axios";
// import LoadingSpin from "../../../../../layouts/components/loadings/LoadingSpin";
import AlertInfo from "../../../../../layouts/components/alerts/AlertInfo";
import TableUsers from "./TableUsers";

export default function Users() {
  const [users, setUsers] = useState({
    loading: false,
    data: [],
    message: "",
  });

  const getUsers = () => {
    // setProduct({ ...product, loading: true });
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/students",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        //setProduct(response.data.data)
        setUsers({
          ...users,
          loading: false,
          data: response.data.data,
          message: "",
        });
        //console.log(product)
      })
      .catch((error) => {
        //console.log(error);
        setUsers({ ...users, loading: false, message: error, data: [] });
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="">
      <div className="row ">
        <div className="col-sm-12 col-lg-8">
          <div className="d-flex flex-wrap flex-stack pb-7">
            <div className="d-flex flex-wrap align-items-center my-1">
              <h3 className="fw-bolder me-5 my-1">
                {Object.values(users.data).length} Users Data
              </h3>
            </div>
            <div className="d-flex flex-wrap my-1">
              <div className="d-flex my-0">
                <div className="input-group me-3">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search here"
                    autoComplete="off"
                  />
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* {product.loading ? <LoadingSpin /> : ""} */}
          {users.message ? (
            <AlertInfo
              message={users.message.name + ". " + users.message.message}
              variant="danger"
            />
          ) : (
            ""
          )}
          <div className="users-items ">
            <TableUsers data={users.data} />
          </div>
        </div>

        <div className="col-sm-12 col-lg-4 ">
          <Form getUsers={getUsers} />
        </div>
      </div>
    </div>
  );
}
