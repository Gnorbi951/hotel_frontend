import React from "react";

const RoomCategoryInfo = (props) => {
    let currentRoom = props.currentRoom;

    let roomText = `${currentRoom.name} has capacity for ${currentRoom.capacity} people on ${currentRoom.size} square meters. ${currentRoom.description}`;
    return (
        <div className="row" style={{ overflow: "hidden", margin: "2em" }}>
            <div className="col-6">
                <img id="room_category_img"
                    className="half-page-image"
                    src={currentRoom.imgUrl}
                    alt="left_image"
                />
                <div className="right-side-picture-shade" />
            </div>
            <div className="col-6 text-in-middle">
                <h1 className="
                {/*text-center*/}
                 card-text gold-text-selection">
                    <b className="gold-text-selection">{currentRoom.name.toUpperCase()}</b>
                    <p />
                    {roomText}
                </h1>
                <br />
                <button
                    type="button"
                    key={currentRoom.id}
                    className="btn btn-secondary card-text"
                    data-id={currentRoom.id}
                    style={buttonPlacementStyle}
                >
                    Reserve
                </button>
            </div>
        </div>
    );
};

export default RoomCategoryInfo;


const buttonPlacementStyle = {
    // position: "relative",
    // bottom: "-25%",
    // right: "50%",
}
