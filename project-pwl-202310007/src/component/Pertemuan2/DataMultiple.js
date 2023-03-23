import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "./Layout";

export default function DataMultiple() {
  var today = new Date();
  const currentDate = formatDate(today);
  const objProfile = {
    npm: 0,
    fname: "",
    mname: "",
    lname: "",
    birthdate: currentDate,
  };
  const [postData, setPostData] = useState([objProfile]);
  const [mymodal, setMymodal] = useState({
    show: false,
    message: "",
  });
  const modalHandleClose = () => {
    setMymodal({ ...mymodal, show: false });
  };

  const RowItem = ({ data, index }) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="npm"
            className="form-control"
            placeholder="NPM"
            pattern="^[0-9]*$"
            defaultValue={data.npm ? data.npm : ""}
            onMouseLeave={(e) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].npm = parseInt(e.target.value);
                return newData;
              })
            }
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="firstname"
            defaultValue={data.fname}
            onMouseLeave={(e) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].fname = e.target.value;
                return newData;
              })
            }
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="mname"
            className="form-control"
            placeholder="middlename"
            defaultValue={data.mname}
            onMouseLeave={(e) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].mname = e.target.value;
                return newData;
              })
            }
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="lname"
            className="form-control"
            placeholder="lastname"
            defaultValue={data.lname}
            onMouseLeave={(e) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].lname = e.target.value;
                return newData;
              })
            }
            required
          />
        </td>
        <td>
          <DatePicker
            selected={new Date(data.birthdate)}
            onChange={(value) =>
              setPostData((prev) => {
                const newData = [...prev];
                newData[index].birthdate = formatDate(value);
                return newData;
              })
            }
            className="form-control"
            dateFormat="yyyy-MM-dd"
            placeholderText="Choose Date"
            required
          />
        </td>
        {index !== 0 ? (
          <td>
            <button
              className="btn btn-icon btn-sm btn-outline-danger"
              type="button"
              onClick={(e) =>
                setPostData((prev) => {
                  const newData = [...prev];
                  delete newData[index];
                  return newData;
                })
              }
            >
              <i
                className="bi bi-trash3"
                onClick={(e) =>
                  setPostData((prev) => {
                    const newData = [...prev];
                    delete newData[index];
                    return newData;
                  })
                }
              ></i>
            </button>
          </td>
        ) : (
          ""
        )}
      </tr>
    );
  };

  const resultPost = (obj) => {
    return (
      <div className="result">
        {obj.map((v, index) =>
          v ? (
            <div className="border-bottom mb-3 " key={index}>
              <p>
                <span className="fw-bolder">NPM:</span> {v.npm}
              </p>
              <p>
                <span className="fw-bolder">Fullname:</span> {v.fname} {v.mname}{" "}
                {v.lname}{" "}
              </p>
              <p>
                <span className="fw-bolder">Birthdate:</span> {v.birthdate}{" "}
              </p>
              <p>
                <span className="fw-bolder">Age:</span>{" "}
                {calculateAge(v.birthdate)} years old{" "}
              </p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    );
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    let myresult = resultPost(postData);
    setMymodal({ ...mymodal, show: true, message: myresult });
  };

  return (
    <Layout title="Profil">
      <div id="form-multiple" className="card mb-5 mb-xl-10">
        <div className="card-header">
          <div className="card-title">
            <h3 className="text-center">Widget Two</h3>
          </div>
        </div>
        <div className="card-body p-0">
          <form
            method="post"
            autoComplete="off"
            onSubmit={(e) => handlerSubmit(e)}
          >
            <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
              <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
                <tr>
                  <th>NPM</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Birthdate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {postData.map((v, index) =>
                  v ? <RowItem key={index} data={v} index={index} /> : ""
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={6}>
                    <div className="d-flex justify-content-between mt-2">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        type="button"
                        onClick={() =>
                          setPostData((prev) => {
                            return [...prev, objProfile];
                          })
                        }
                      >
                        <i className="bi bi-plus-circle-dotted me-2"></i>
                        Add new row
                      </button>
                      <button className="btn btn-md btn-primary" type="submit">
                        Save
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </form>
        </div>
        <ModalProfile
          show={mymodal.show}
          handleClose={modalHandleClose}
          message={mymodal.message}
        />
      </div>
    </Layout>
  );
}

const formatDate = (datestring) => {
  const today = new Date(datestring);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
};

const calculateAge = (birthdate) => {
  var today = new Date();
  var birthDate = new Date(birthdate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const ModalProfile = ({ show, handleClose, message }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
    </Modal>
  );
};
