import React, { useEffect, useState, Modal } from "react";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";
import ReservedRoomDetailsForAdmin from "./layout/ReservedRoomDetailsForAdmin";

const AdminView = (props) => {
  const [reservations, setReservations] = useState(null);

  useEffect(() => {
    //TODO: swich to reservation path
    axios.get("http://localhost:8080/room/allOccupiedRooms").then((res) => {
      setReservations(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>
        Reservations
      </h1>
      <ScrollAnimation animateIn="fadeIn" delay={5} duration={1.5} offset={100}>
        {reservations ? (
          <div className="card-deck ml-5 mr-3 mt-5">
            {reservations.map((reservation, index) => (
              <ReservedRoomDetailsForAdmin
                reservation={reservation}
                key={index}
              />
            ))}
          </div>
        ) : (
          <div className="card-deck ml-5 mr-3 mt-5">
            {/*<ReservedRoomCard room={null} />*/}
            Loading reservations, please wait.
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
