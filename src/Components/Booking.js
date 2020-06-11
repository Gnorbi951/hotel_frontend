import React, {useContext, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar, faUser} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import {CheckInModalContext} from "./context/CheckInModal";
import {CheckOutModalContext} from "./context/CheckOutModal";
import ScrollAnimation from "react-animate-on-scroll";
import ReservedRoomCard from "./layout/ReservedRoomCard";

const OptionButton = styled.button`
    border: 0.2em solid #fcad26;
    color: #fcad26;
    background-color: white;
    margin-left: 0.2em;
    padding: 1em 3em;
    cursor: pointer;
    & div {
     text-align: center;
     font-weight: bold;
     font-size: 1.5em;
     float: right;
     margin-left: 10px;
     }
`
const BookingDiv = styled.div`
    margin-left: 3em;
    margin-top: 2em;
`

const SearchButton = styled.div`
    font-size: 2rem;
    font-weight: 700;
    margin-left: 0.3em;
    background: #2b2b2b;
    color: #fff;
    cursor: pointer;
    padding: 0.4em 0.8em;
    float: left;
`

const Booking = (props) => {
    const { handleShowIn,inDate } = useContext(CheckInModalContext);
    const { handleShowOut,outDate} = useContext(CheckOutModalContext);
    const [ resultRoom,setResultRoom] = useState(null);

    const searchForAvailableRoom = (id,inDate,outDate) => {
          axios
            .get(`http://localhost:8080/room/first-available-category/${inDate}/${outDate}/${id}`)
            .then((res) => {
                setResultRoom(res.data)
            });
    }

    const CustomButton = ({click,icon,title,date}) => {
        return(
            <OptionButton onClick={click}>
                <FontAwesomeIcon icon={icon} size='2x'/>
                <div>
                    <b>{title}</b>
                    <p>{date}</p>
                </div>
            </OptionButton>
        )
    }

    return (
        <div>
            <ScrollAnimation animateIn="fadeIn">
                <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>
                    Booking
                    <br/>
                    {props.match.params.id}
                </h1>
                <BookingDiv>
                    <SearchButton onClick={() => searchForAvailableRoom(props.match.params.id,inDate,outDate)}>SEARCH</SearchButton>
                    <CustomButton icon={faUser} title={"Guests"}/>
                    <CustomButton icon={faCalendar} click={handleShowIn} title={"Check-in"} date={inDate}/>
                    <CustomButton icon={faCalendar} click={handleShowOut} title={"Check-out"} date={outDate}/>
                    <div>
                        {resultRoom ? (
                            <ReservedRoomCard room={resultRoom} />
                        ):(
                           <p>asd</p>
                        )}
                    </div>
                </BookingDiv>
            </ScrollAnimation>
        </div>
    );
}


const mainTextStyle = {
    marginTop: "2.5em",
    textShadow: "0 0 18px rgba(0,0,0,0.4)",
    fontFamily: "Alegreya Sans SC, Alata",
}



export default Booking;