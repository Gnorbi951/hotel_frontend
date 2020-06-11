import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const EditReservationModal = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(event.target.category.value);
    //TODO:Need endpoint
    axios.put("https://example.com/", {
      reservationId: { resId },
      startDate: { resId },
      endDate: { resId },
      roomId: { resId },
    });
  };
  const resId = props.resId;
  const category = props.category;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const room = props.room;

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
                    disabled
                    defaultValue={category}
                    placeholder="category"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="startDate">
                  <Form.Label>startDate</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    required
                    defaultValue={startDate}
                    placeholder="category"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="endDate">
                  <Form.Label>endDate</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    required
                    defaultValue={endDate}
                    placeholder="category"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="room">
                  <Form.Label>room</Form.Label>
                  <Form.Control
                    type="text"
                    name="room"
                    required
                    defaultValue={room}
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
