import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

function AddReservationModal(props) {
  const [categories, setCategories] = useState(null);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const postConfig = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/category/all`, config).then((res) => {
      setCategories(res.data);
      console.log(res.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Token:" + config);
    axios
      .post(
        `http://localhost:8080/category/reserve/${event.target.category.value}/${event.target.startDate.value}/${event.target.endDate.value}`,
        "hello",
        { headers: postConfig }
      )
      .then((res) => {
        console.log("Token:" + config);
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
          Add new reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {categories ? (
          <div className="container">
            <Row>
              <Col sm={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                      {categories.map((category) => (
                        <option value={category.id}>{category.name}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="startDate">
                    <Form.Label>startDate</Form.Label>
                    <Form.Control
                      type="date"
                      name="startDate"
                      required
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="endDate">
                    <Form.Label>endDate</Form.Label>
                    <Form.Control
                      type="date"
                      name="endDate"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit" onClick={props.onHide}>
                    Add
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        ) : (
          <h1>loading</h1>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddReservationModal;
