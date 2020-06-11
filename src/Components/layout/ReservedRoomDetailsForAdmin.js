import React, { useState, useEffect } from "react";
import axios from "axios";

const ReservedRoomDetailForAdmin = (props) => {
  const reservation = props.reservation.category;
  console.log(reservation);

  let addConfirmListener = () => {
    let buttons = document.getElementsByClassName("confirm-btn");
    for (let button of buttons) {
      if (reservation.id == button.id) {
        button.addEventListener("click", () => confirmReservation(reservation));
      }
    }
  };

  const confirmReservation = (reser) => {
    //axios.post(`http://localhost:8080//${currentRoom.id}`).then((res) => {
    alert(`post request sent to path with id: ${reservation.id}`);
    //});
  };

  let addModifyListener = () => {
    let buttons = document.getElementsByClassName("modify-btn");
    for (let button of buttons) {
      if (button.id == reservation.id) {
        button.addEventListener("click", () => modifyReservation(reservation));
      }
    }
  };

  const modifyReservation = (reser) => {
    //axios.post(`http://localhost:8080//${currentRoom.id}`).then((res) => {
    // TODO: check if reservation was successful.
    alert(`Modification at ${reser.id}`);
    // });
  };

  let addDeleteListener = () => {
    let buttons = document.getElementsByClassName("delete-btn");
    for (let button of buttons) {
      if (button.id == reservation.id) {
        button.addEventListener("click", () =>
          DeleteReservation(reservation.id)
        );
      }
    }
  };

  const DeleteReservation = (reservationId) => {
    //axios.post(`http://localhost:8080//${currentRoom.id}`).then((res) => {
    // TODO: check if reservation was successful.
    alert(`Delete request to path with id: ${reservationId}`);
    //});
  };

  useEffect(addConfirmListener, []);
  useEffect(addModifyListener, []);
  useEffect(addDeleteListener, []);

  let cardFront = (
    <>
      <div
        id={`${reservation.id}-front`}
        className="card mt-1 mb-3 clearfix overflow-hidden "
        style={cardStyle}
      >
        <div>{reservation.name}</div>
        <div>
          ReservationID:{reservation.id}
          Date:placeholder(2020.01.01-2020.01.07)
        </div>
        <div>
          <button
            type="button"
            key={"reservationIdPlaceholder"}
            class="btn btn-secondary card-text confirm-btn"
            id={reservation.id}
          >
            Comfirm
          </button>
          <button
            type="button"
            key={"reservationIdPlaceholder"}
            className="btn btn-secondary card-text modify-btn"
            id={reservation.id}
          >
            Modify
          </button>
          <button
            type="button"
            class="btn btn-secondary card-text delete-btn"
            id={reservation.id}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );

  return <div>{cardFront}</div>;
};

export default ReservedRoomDetailForAdmin;

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
