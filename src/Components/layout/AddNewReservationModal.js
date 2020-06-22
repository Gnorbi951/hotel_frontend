import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

function AddReservationModal(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(event.target.name.value);
    //TODO:
    // axios.post("http://localhost:8080/room/allOccupiedRooms").then((res) => {
    //     setReservations(res.data);
    //   });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <div className="container">
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                  ></Form.Control>
                </Form.Group>
                <Button type="submit">Add</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddReservationModal;
