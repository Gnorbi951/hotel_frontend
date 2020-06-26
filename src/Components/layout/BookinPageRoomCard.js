import React, { useState } from "react";
import axios from 'axios';
import {Button, Col, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";

const BookingPageRoomCard = (props) => {
    const room = props.room;

    const postConfig = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [message, setMessage] = useState("");
    const successfulBookingMessage = `You have successfully booked a ${room.name}. Thank you!`;
    const failedBookingMessage = `We are sorry, but we cannot provide you with a 
                                ${room.name} from ${props.inDate} until ${props.outDate}. 
                                You can choose another category, modify the dates of your stay or
                                 check back later to see if it has become available.`;

    const reserveRoom = () => {

      axios
        .post(`http://localhost:8080/category/reserve/${room.id}/${props.inDate}/${props.outDate}`,
            "hello",
            { headers: postConfig }
        )
        .then((res) => {
            setMessage(res.data ? successfulBookingMessage : failedBookingMessage);
        });
      handleShow();
    };

    let cardFront = (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reservation for a {room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {localStorage.getItem("username") ? (
                <div id={`reservation-${room.id}-modal-body`}>
                    {message}
                </div>
                    ):(
                        <LogInStyle>
                            <h3 className="text-in-middle gold-text-selection">
                                You are not logged in.
                                Please log in!
                            </h3>
                            <div>
                                <Link to={"/login"} className="btn btn-secondary card-text reserve-btn">Log In!</Link>
                            </div>
                        </LogInStyle>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="btn btn-default" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div
                id={`${room.id}-front`}
                className="card mt-1 mb-3 clearfix overflow-hidden "
                style={cardStyle}
            >
                <h5 className="card-body gold-text-selection">
                    <img
                        src={room.imgUrl}
                        alt={`NO PICTURE AVAILABLE FOR ${room.name.toUpperCase()}`}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                        className="half-page-image"
                    />
                    <div style={roomNameStyle}>{room.name}</div>
                    <button style={bookButtonStyle}
                            onClick={reserveRoom}

                    >BOOK NOW</button>
                </h5>
            </div>
        </>
    );

    return (
            <div>{cardFront}</div>
    );
};

export default BookingPageRoomCard;

const cardStyle = {
    width: "30rem",
    minHeight: "20rem",
    height: "20rem",
    backgroundColor: "dimgrey",
    border: "1px solid darkgoldenrod",
    borderRadius: "3px",
    float: "left",
    textAlign: "justify",
    boxShadow:
        "  0 2.8px 2.2px rgba(105,105,105, 0.034),\n" +
        "  0 6.7px 5.3px rgba(105,105,105, 0.048),\n" +
        "  0 12.5px 10px rgba(105,105,105, 0.06),\n" +
        "  0 22.3px 17.9px rgba(105,105,105, 0.072)",
};

const roomNameStyle = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    color: "white",
    textShadow: "0 0 18px rgba(0,0,0,0.8)",
    fontFamily: "Alegreya Sans SC, Alata",
    fontSize: "2.5em",
    textAlign: "center",
};

const LogInStyle = styled.div`
    position: center;
    margin-top: 5%;
    & div {
        margin-top: 1em;
        margin-left: 43%;
    }
`

const bookButtonStyle = {
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    color: "white",
    textShadow: "0 0 18px rgba(0,0,0,2)",
    fontFamily: "Alegreya Sans SC, Alata",
    fontSize: "1em",
    textAlign: "center",
    backgroundColor: "grey",
    opacity: ".7",
    padding: "0px 10px",
    border: "15px",
    borderRadius: "5px",
};
