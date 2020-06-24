import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const EditReservationModal = (props) => {
  const resId = props.resId;
  const category = props.category;
  const categoryId = props.categoryId;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const roomId = props.roomId;

  const [availableRooms, setAvailableRooms] = useState(null);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const postConfig = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/room/all-available-category/${startDate}/${endDate}/${categoryId}`,
        config
      )
      .then((res) => {
        setAvailableRooms(res.data);
        console.log(res.data);
      });
  }, [resId]);

  const handleSubmit = (event) => {
    //event.preventDefault();
    console.log(event.target.room.value);
    axios
      .post(
        `http://localhost:8080/finalise_reservation/${resId}/${event.target.room.value}/${event.target.startDate.value}/${event.target.endDate.value}`,
        "hello",
        { headers: postConfig }
      )
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
          Modify reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {availableRooms ? (
          <div className="container">
            <Row>
              <Col sm={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="resId">
                    <Form.Label>id</Form.Label>
                    <Form.Control
                      type="text"
                      name="resId"
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
                    <Form.Control as="select" defaultValue={roomId}>
                      <option key={roomId}>{roomId}</option>
                      {availableRooms.map((room) => (
                        <option key={room.id}>{room.id}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Button type="submit" onClick={props.onHide}>
                    Update
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        ) : (
          <h1>loading</h1>
        )}{" "}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditReservationModal;
