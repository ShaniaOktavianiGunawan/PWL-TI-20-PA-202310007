import React, { useState } from "react";
import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
import axios from "axios";

export function Form(props) {
  const [postData, setPostData] = useState({
    npm: "",
    firstname: "",
    middlename: "",
    lastname: "",
    programs: { id: 1 },
    programStudy: { id: 2 },
    email: "",
    birthdate: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: "http://localhost:8080/api/students",
      headers: { "Content-Type": "application/json" },
      data: postData,
    };
    axios
      .request(config)
      .then((response) => {
        let results = response.data.data;
        console.log(results);
        if (results) {
          openModal({ header: "Info", message: "Successfully submited" });
          props.getUsers();
        } else {
          openModal({ header: "Error", message: "Failed submit" });
        }
      })
      .catch((error) => {
        openModal({ header: "Error", message: error.error });
      });
  };

  return (
    <div className="card bg-white">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-dark">Form Users</h3>
          <p className="text-muted fs-7">
            Please fill up the form with correctly
          </p>
        </div>
      </div>
      <div className="card-body pt-0">
        <form
          method="post"
          autoComplete="off"
          id="form-product"
          onSubmit={(e) => submitForm(e)}
        >
          <div className="mb-3">
            <label className="form-label">NPM</label>
            <input
              type="number"
              name="npm"
              className="form-control"
              defaultValue={postData.npm}
              onChange={(e) =>
                setPostData({ ...postData, npm: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={postData.firstname}
              onChange={(e) =>
                setPostData({ ...postData, firstname: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Middle Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={postData.middlename}
              onChange={(e) =>
                setPostData({ ...postData, middlename: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={postData.lastname}
              onChange={(e) =>
                setPostData({ ...postData, lastname: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Birthdate</label>
            <input
              type="text"
              name="birthdate"
              className="form-control"
              defaultValue={postData.birthdate}
              placeholder="YYYY-MM-DD"
              onChange={(e) =>
                setPostData({ ...postData, birthdate: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              defaultValue={postData.email}
              onChange={(e) =>
                setPostData({ ...postData, email: e.target.value })
              }
            />
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-light me-3" type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
