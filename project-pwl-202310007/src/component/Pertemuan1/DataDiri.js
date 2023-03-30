import React from "react";
import { Button, Col, Container, Form, Row, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const DataDiri = () => {
  const dateNow = new Date();
  const currentYear = dateNow.getFullYear();
  const [NPM, setNPM] = useState(0);
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  // const [date, setdate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setShow(true);
    }
    setValidated(true);
  };

  const yearOfBirth = new Date(date).getFullYear();

  const Age = currentYear - yearOfBirth;
  return (
    <div className="vh-100 d-flex align-items-center">
      <div className=" border rounded  p-5 mx-auto w-75 ">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h2 className="text-center">DATA DIRI</h2>
          <br />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="NPM">
              <Form.Label>NPM </Form.Label>
              <Form.Control
                required
                type="text"
                pattern="[0-9]*"
                placeholder="Enter NPM"
                onChange={(e) => setNPM(e.target.value)}
                maxLength={10}
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid npm.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="Text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid firstname.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                required
                type="Text"
                placeholder="Middle Name"
                onChange={(e) => setMiddleName(e.target.value)}
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid firstname.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="Text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid lastname.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="duedate">
              <Form.Label>Birthdate</Form.Label>
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid birthdate.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <hr />
          <br />

          <Button
            variant="primary"
            type="submit"
            style={{ alignContent: "center" }}
          >
            Submit
          </Button>
        </Form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Data Diri Kamu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs="3">NPM</Col>
              <Col xs="1">:</Col>
              <Col>{NPM}</Col>
            </Row>
            <Row>
              <Col xs="3">FullName</Col>
              <Col xs="1">:</Col>
              <Col>
                {FirstName} {MiddleName} {LastName}
              </Col>
            </Row>
            <Row>
              <Col xs="3">Age</Col>
              <Col xs="1">:</Col>
              <Col>
                {Age}{" "}
                {Age.toString().slice(-1) === "1"
                  ? "st"
                  : Age.toString().slice(-1) === "2"
                  ? "nd"
                  : Age.toString().slice(-1) === "3"
                  ? "rd"
                  : "th"}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DataDiri;
