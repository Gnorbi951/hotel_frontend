import React, { useState } from "react";
import axios from "axios";

const ReservedRoomCard = (props) => {
  const room = props.room.category;

  /*let addConfirmListener = () => {
    let buttons = document.getElementsByClassName("confirm-btn");
    for (let button of buttons) {
      button.addEventListener("click", () =>
        confirmReservation(button.dataset.id)
      );
    }
  };

  const confirmReservation = (buttonId) => {
    axios.post(`http://localhost:8080//${currentRoom.id}`).then((res) => {
      // TODO: check if reservation was successful.
      alert(`You have booked a ${res.data.category.name}`);
    });
  };

  
  let addModifyListener = () => {
    let buttons = document.getElementsByClassName("confirm-btn");
    for (let button of buttons) {
      button.addEventListener("click", () =>
        confirmReservation(button.dataset.id)
      );
    }
  };

  const modifyReservation = (buttonId) => {
    axios.post(`http://localhost:8080//${currentRoom.id}`).then((res) => {
      // TODO: check if reservation was successful.
      alert(`You have booked a ${res.data.category.name}`);
    });
  }; 

  let addDeleteListenter = () => {
    let buttons = document.getElementsByClassName("confirm-btn");
    for (let button of buttons) {
      button.addEventListener("click", () =>
        confirmReservation(button.dataset.id)
      );
    }
  };

  const DeleteReservation = (buttonId) => {
    axios.post(`http://localhost:8080//${currentRoom.id}`).then((res) => {
      // TODO: check if reservation was successful.
      alert(`You have booked a ${res.data.category.name}`);
    });
  }; */

  let cardFront = (
    <>
      <div
        id={`${room.id}-front`}
        className="card mt-1 mb-3 clearfix overflow-hidden "
        style={cardStyle}
      >
        <div>{room.name}</div>
        <div>
          ReservationID:placeholder(123213) Date of Stay:
          placeholder(2020.01.01-2020.01.07)
        </div>
        <div>
          <button
            type="button"
            key={"reservationIdPlaceholder"}
            class="btn btn-secondary card-text confirm-btn"
            data-id={"reservationIdPlaceholder"}
          >
            Comfirm
          </button>
          <button
            type="button"
            key={"reservationIdPlaceholder"}
            className="btn btn-secondary card-text reserve-btn"
            data-id={"reservationIdPlaceholder"}
          >
            Modify
          </button>
          <button
            type="button"
            class="btn btn-secondary card-text reserve-btn"
            data-id="1"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );

  return <div>{cardFront}</div>;
};

export default ReservedRoomCard;

const cardStyle = {
  width: "25rem",
  minHeight: "20rem",
  height: "30rem", //20rem
  backgroundColor: "dimgrey",
  border: "1px solid darkgoldenrod",
  borderRadius: "3px",
  textAlign: "justify",
  boxShadow:
    "  0 2.8px 2.2px rgba(105,105,105, 0.034),\n" +
    "  0 6.7px 5.3px rgba(105,105,105, 0.048),\n" +
    "  0 12.5px 10px rgba(105,105,105, 0.06),\n" +
    "  0 22.3px 17.9px rgba(105,105,105, 0.072)",
};
