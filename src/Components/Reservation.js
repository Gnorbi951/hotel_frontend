import React, {useEffect, useState} from "react";
import axios from "axios";
import ReservedRoomCard from "./layout/ReservedRoomCard";

const Reservation = () => {
    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/room/allOccupiedRooms").then((res) => {
            setRooms(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div>
            <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>Your Reservations</h1>
            {rooms ? (
                rooms.map((room) => <ReservedRoomCard room={room} />)
            ) : (
                <div className="card-deck ml-5 mr-3 mt-5">
                    <ReservedRoomCard room={null} />
                    <ReservedRoomCard room={null} />
                    <ReservedRoomCard room={null} />
                </div>
            )
            }
        </div>
    )
}

export default Reservation;

const mainTextStyle = {
    marginTop: "1em",
    textShadow: "0 0 18px rgba(0,0,0,0.4)",
    fontFamily: "Alegreya Sans SC, Alata",
}