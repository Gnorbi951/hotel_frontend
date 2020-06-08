import React, { useEffect, useState } from "react";
import axios from "axios";
import ReservedRoomCard from "./layout/ReservedRoomCard";
import ScrollAnimation from "react-animate-on-scroll";

const AdminView = (props) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/room/allOccupiedRooms").then((res) => {
      setRooms(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>
        Your Reservations
      </h1>
      <ScrollAnimation animateIn="fadeIn" delay={5} duration={1.5} offset={100}>
        {rooms ? (
          <div className="card-deck ml-5 mr-3 mt-5">
            {rooms.map((room, index) => (
              <ReservedRoomCard room={room} key={index} />
            ))}
          </div>
        ) : (
          <div className="card-deck ml-5 mr-3 mt-5">
            {/*<ReservedRoomCard room={null} />*/}
            Loading cards, please wait.
          </div>
        )}
      </ScrollAnimation>
    </div>
  );
};

export default AdminView;

const mainTextStyle = {
  marginTop: "2.5em",
  textShadow: "0 0 18px rgba(0,0,0,0.4)",
  fontFamily: "Alegreya Sans SC, Alata",
};
