import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomDetails from "./RoomDetails";

const RoomTabs = (props) => {
  const [rooms, setRooms] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/category/all").then((res) => {
      setRooms(res.data);
      console.log(res.data);
      // console.log(rooms);
      setCurrentRoom(res.data[0]);
    });
  }, []);

  const changeRoomView = (buttonId) => {
    let roomDetailsInfo;
    for (let room of rooms) {
      if (room.id === Number(buttonId)) {
        roomDetailsInfo = room;
        break;
      }
    }
    setCurrentRoom(roomDetailsInfo);
  };

  let addListenters = () => {
    let buttons = document.getElementsByClassName("btn");
    for (let button of buttons) {
      button.addEventListener("click", () => changeRoomView(button.dataset.id));
    }
  };

  useEffect(addListenters, [rooms]);

  return (
    <div style={roomsBorderStyle}>
      <div style={centerElement}>
        {rooms ? (
          rooms.map((room, index) => (
            <button
              type="button"
              key={index}
              className="btn btn-secondary card-text"
              data-id={room.id}
              style={{margin: "10px"}}
            >
              {room.name}
            </button>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <br />
      {rooms && currentRoom ? (
        <div id="room-description">
          <RoomDetails currentRoom={currentRoom} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default RoomTabs;


const centerElement = {
  position: "absolute",
  // top: "50%",
  left: "50%",
  transform: "translate(-50%, 0%)",
  margin: "0.5em",
  whiteSpace: "nowrap"
};

const roomsBorderStyle = {
  border: "0.4em solid lightgrey",
  margin: "1.5em"
};