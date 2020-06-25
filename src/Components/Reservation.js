import React, { useEffect, useState } from "react";
import axios from "axios";
import ReservedRoomCard from "./layout/ReservedRoomCard";
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Reservation = (props) => {
  const [rooms, setRooms] = useState(null);
  const [userRoles, setUserRoles] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8080/get-my-reservations").then((res) => {
      setRooms(res.data);
      setUserRoles(localStorage.getItem("roles"))

    });
  }, []);

  return (
      <div>
        <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>
          Your Reservations
        </h1>
        <ScrollAnimation animateIn="fadeIn" delay={5} duration={1.5} offset={100}>
          {userRoles ? (
              <div>
                {rooms ? (
                    <div className="card-deck ml-5 mr-3 mt-5">
                      {rooms.map((room, index) => (
                          <ReservedRoomCard room={room} key={index}/>
                      ))}
                    </div>
                ) : (
                    <div className="card-deck ml-5 mr-3 mt-5">
                      Loading cards, please wait.
                    </div>)}
              </div>
          ) : (
              <LogInStyle>
                  <h3 className="text-in-middle gold-text-selection">
                      You are not logged in.
                      Please log in!
                  </h3>
                  <div>
                <Link to={"/login"} className="btn btn-secondary card-text reserve-btn">Log In!</Link>
                  </div>
              </LogInStyle>
          )}
        </ScrollAnimation>
      </div>
  );
};

export default Reservation;

const mainTextStyle = {
  marginTop: "2.5em",
  textShadow: "0 0 18px rgba(0,0,0,0.4)",
  fontFamily: "Alegreya Sans SC, Alata",
};

const LogInStyle = styled.div`
    position: center;
    margin-top: 5%;
    & div {
        margin-top: 1em;
        margin-left: 48%;
    }
`