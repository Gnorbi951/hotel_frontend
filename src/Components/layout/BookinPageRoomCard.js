import React, { useState } from "react";
import axios from 'axios';

const BookingPageRoomCard = (props) => {
    console.log("entering bookingpageroomcard")
    const room = props.room;

    const reserveRoom = () => {
      axios
        .post(`http://localhost:8080/category/reserve/${room.id}/${props.inDate}/${props.outDate}`)
        .then((res) => {
          alert(`You have booked a ${room.name}`);
        });
    };

    let cardFront = (
        <>
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
                    <button style={bookButtonStyle} onClick={reserveRoom}>BOOK NOW</button>
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
