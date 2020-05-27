import React from "react";
import LeftContainer from "./LeftContainer";

const RoomDetails = (props) => {
  let currentRoom = props.currentRoom;

  let roomText = `${currentRoom.name} has capacity for ${currentRoom.capacity} people on ${currentRoom.size} square meters. ${currentRoom.description}`;

  return (
    <div>
        <LeftContainer textBody={roomText} textHeader={currentRoom.name} />
      {/*<h3>{currentRoom.name}</h3>*/}
      {/*<h4>Description: {currentRoom.description}</h4>*/}
      {/*<h4>{currentRoom.capacity}</h4>*/}
      {/*<h4>{currentRoom.size} squaremeters</h4>*/}
      <form
        action={`http://localhost:8080/category/reserve/${currentRoom.id}`}
        method="POST"
      >
        <button
          type="button"
          key={currentRoom.id}
          className="btn btn-secondary"
          data-id={currentRoom.id}
        >
          Reserve
        </button>
      </form>
    </div>
  );
};

export default RoomDetails;
