import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ReservedRoomCard = (props) => {
  const room = props.room.category;
  const [isFlipped, setIsFlipped] = useState(false);

  let setFlipCard = (e) => {
    e.preventDefault();
    isFlipped ? setIsFlipped(false) : setIsFlipped(true);
  };

  let cardFront = (
    <>
      <div
        id={`${room.id}-front`}
        className="card mt-1 mb-3 clearfix overflow-hidden "
        style={cardStyle}
      >
        <h5 className="card-body gold-text-selection" onClick={setFlipCard}>
          <img
            src={room.imgUrl}
            alt={`NO PICTURE AVAILABLE FOR ${room.name.toUpperCase()}`}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="half-page-image"
          />
          <div style={frontRoomNameStyle}>{room.name}</div>
          <div style={frontDateStyle}>
            Date of Stay: placeholder(2020.01.01-2020.01.07)
            ReservationID:placeholder(123213) asd
          </div>
        </h5>
      </div>
      <button
        type="button"
        class="btn btn-secondary card-text reserve-btn"
        data-id="1"
      >
        Comfirm
      </button>
      <button
        type="button"
        class="btn btn-secondary card-text reserve-btn"
        data-id="1"
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
    </>
  );

  let cardBack = (
    <>
      <div
        id={`${room.id}-back`}
        className="card mt-1 mb-3 clearfix overflow-hidden"
        style={cardStyle}
      >
        <div className="card-body" onClick={setFlipCard}>
          <div className="backdrop-container">
            <h2
              className="card-title gold-text-selection"
              style={cardBackTitle}
            >
              {`${room.name.toUpperCase()}`}
            </h2>
            <p
              className="card-text overflow-hidden gold-text-selection"
              style={{
                color: "white",
                fontSize: "1.5em",
              }}
            >
              {room.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div>{cardFront}</div>
      <div>{cardBack}</div>
    </ReactCardFlip>
  );
};

export default ReservedRoomCard;

const cardStyle = {
  width: "40rem",
  minHeight: "20rem",
  height: "20rem",
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

const frontRoomNameStyle = {
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

const frontDateStyle = {
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

const cardBackTitle = {
  textShadow: "0 0 18px rgba(0,0,0,2)",
  textAlign: "center",
  top: "50%",
  right: "50%",
  color: "white",
};
