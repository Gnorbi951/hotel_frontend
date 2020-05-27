import React, {useEffect, useState} from "react";
import axios from "axios";

const RoomTabs = (props) => {
    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/category/all")
            .then((res) => {
                setRooms(res.data);
                // console.log(res.data);
                // console.log(rooms);
            });
    }, [])

    let addListenters = () => {
        let buttons = document.getElementsByClassName("btn");
        for (let button of buttons) {
            button.addEventListener("click", () => alert(button.dataset.id))
        }
    }

    useEffect(addListenters, [rooms]);

    return (<React.Fragment>
            {rooms ?
                rooms.map((room, index) => (
                    <button type="button" className="btn btn-secondary" data-id={room.id}>{room.name}</button>
                )) : (<h1>Loading</h1>)
            }
            {rooms ?
                (
                    <div id="room-description">
                        <div>{rooms[0].description}</div>
                    </div>
                ):
                (
                    <div>Loading</div>
                )
            }


    </React.Fragment>
    )}

export default RoomTabs;