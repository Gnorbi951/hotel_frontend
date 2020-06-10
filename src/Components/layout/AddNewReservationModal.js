import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

function AddReservationModal(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(event.target.name.value);
    console.log("works");
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
                    name="cica"
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
