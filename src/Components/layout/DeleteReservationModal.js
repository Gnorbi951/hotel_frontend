import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const DeleteReservationModal = (props) => {
  const resId = props.resId;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Deleted reservation on id: ${resId}`);
    axios
      .delete(`http://localhost:8080/reservation/delete/${resId}`)
      .then((res) => {
        console.log(res.data);
      });
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
          Delete Reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <h1>
                  Are you sure you want to delete reservation on id: {resId}
                </h1>
                <Button type="submit" onClick={props.onHide}>
                  Delete
                </Button>
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
};

export default DeleteReservationModal;
