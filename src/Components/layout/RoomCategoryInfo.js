import React, { useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const RoomCategoryInfo = (props) => {
  let currentRoom = props.currentRoom;

  // let addListenters = () => {
  //   let buttons = document.getElementsByClassName("reserve-btn");
  //   for (let button of buttons) {
  //     button.addEventListener("click", () =>
  //       reserveCurrentRoom(button.dataset.id)
  //     );
  //   }
  // };

  // const reserveCurrentRoom = (buttonId) => {
  //   axios
  //     .post(`http://localhost:8080/category/reserve/${currentRoom.id}`)
  //     .then((res) => {
  //       // TODO: check if reservation was successful.
  //       alert(`You have booked a ${res.data.category.name}`);
  //     });
  // };

  // useEffect(addListenters, [currentRoom]);

  let roomText = `${currentRoom.name} has capacity for ${currentRoom.capacity} people on ${currentRoom.size} square meters. ${currentRoom.description}`;
  return (
    <div className="row" style={{ overflow: "hidden", margin: "2em" }}>
      <div className="col-6">
        <img
          id="room_category_img"
          className="half-page-image"
          src={currentRoom.imgUrl}
          alt="left_image"
        />
        <div className="right-side-picture-shade" />
      </div>
      <div className="col-6 text-in-middle">
        <h1
          className="
                {/*text-center*/}
                 card-text gold-text-selection"
        >
          <b className="gold-text-selection">
            {currentRoom.name.toUpperCase()}
          </b>
          <p />
          {roomText}
        </h1>
        <br />
        <Link
          to={"/booking"}
          key={currentRoom.id}
          className="btn btn-secondary card-text reserve-btn"
          data-id={currentRoom.id}
          style={buttonPlacementStyle}
        >
          Reserve
        </Link>
      </div>
    </div>
  );
};

export default RoomCategoryInfo;

const buttonPlacementStyle = {
  // position: "relative",
  // bottom: "-25%",
  // right: "50%",
};
