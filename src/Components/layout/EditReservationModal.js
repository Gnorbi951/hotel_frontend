import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const EditReservationModal = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(event.target.name.value);
    //TODO:PUT
    // axios.put("http://localhost:8080/room/allOccupiedRooms").then((res) => {
    //     setReservations(res.data);
    //   });
  };
  const resId = props.resId;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modify reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <div className="container">
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="id">
                  <Form.Label>id</Form.Label>
                  <Form.Control
                    type="text"
                    name="id"
                    required
                    disabled
                    placeholder={resId}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="category">
                  <Form.Label>category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    required
                    defaultValue={props.category}
                    placeholder="category"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="startDate">
                  <Form.Label>startDate</Form.Label>
                  <Form.Control
                    type="text"
                    name="startDate"
                    required
                    defaultValue={props.startDate}
                    placeholder="category"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="endDate">
                  <Form.Label>endDate</Form.Label>
                  <Form.Control
                    type="text"
                    name="endDate"
                    required
                    defaultValue={props.endDate}
                    placeholder="category"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="room">
                  <Form.Label>room</Form.Label>
                  <Form.Control
                    type="text"
                    name="room"
                    required
                    defaultValue={props.room}
                    placeholder="room"
                  ></Form.Control>
                </Form.Group>

                <Button type="submit">Update</Button>
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

export default EditReservationModal;
