import React from "react";
import RoomCategoryInfo from "./RoomCategoryInfo";

const RoomDetails = (props) => {
  let currentRoom = props.currentRoom;



  return (
    <div>
        <RoomCategoryInfo currentRoom={currentRoom} />
      {/*<h3>{currentRoom.name}</h3>*/}
      {/*<h4>Description: {currentRoom.description}</h4>*/}
      {/*<h4>{currentRoom.capacity}</h4>*/}
      {/*<h4>{currentRoom.size} squaremeters</h4>*/}
      <form
        action={`http://localhost:8080/category/reserve/${currentRoom.id}`}
        method="POST"
      >

      </form>
    </div>
  );
};

export default RoomDetails;
