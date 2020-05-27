import React, {useEffect, useState} from "react";
import axios from "axios";

const RoomTabs = (props) => {
    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/category/all")
            .then((res) => {
                setRooms(res.data);
                 console.log(res.data);
                // console.log(rooms);
            });
    }, [])

    const changeRoomView = (buttonId) => {
        const roomDescriptionContainer = document.getElementById("room-description");
        roomDescriptionContainer.innerHTML = "";
        let roomDetails;
        for (let room of rooms) {
            if (room.id === Number(buttonId)) {
                roomDetails = room;
                break;
            }
        }
        let roomHtml = `
        <div>
            <h3>${roomDetails.name}</h3>
            <h4>Description: ${roomDetails.description}</h4>
            <h4>${roomDetails.capacity}</h4>
            <h4>${roomDetails.size} squaremeters</h4>
        </div>
        `;
        let node = document.createRange().createContextualFragment(roomHtml);
        roomDescriptionContainer.append(node);

    }

    let addListenters = () => {
        let buttons = document.getElementsByClassName("btn");
        for (let button of buttons) {
            button.addEventListener("click", () => changeRoomView(button.dataset.id))
        }
    }

    useEffect(addListenters, [rooms]);

    return (<React.Fragment>
            {rooms ?
                rooms.map((room, index) => (
                    <button type="button" key={index} className="btn btn-secondary" data-id={room.id}>{room.name}</button>
                )) : (<h1>Loading</h1>)
            }
            {rooms ?
                (
                    <div id="room-description">
                        <div>
                        <h3>{rooms[0].name}</h3>
                        <h4>Description: {rooms[0].description}</h4>
                        <h4>{rooms[0].capacity}</h4>
                        <h4>{rooms[0].size} squaremeters</h4>
                    </div>
                    </div>
                ):
                (
                    <div>Loading</div>
                )
            }


    </React.Fragment>
    )}

export default RoomTabs;