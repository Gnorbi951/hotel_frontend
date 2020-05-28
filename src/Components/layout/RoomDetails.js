import React from "react";
import RoomCategoryInfo from "./RoomCategoryInfo";

const RoomDetails = (props) => {
  let currentRoom = props.currentRoom;



  return (
    <div style={{marginTop: "3em"}} >
        <RoomCategoryInfo currentRoom={currentRoom} />
      <form
        action={`http://localhost:8080/category/reserve/${currentRoom.id}`}
        method="POST"
      >

      </form>
    </div>
  );
};

export default RoomDetails;
