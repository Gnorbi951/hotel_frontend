import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar, faSignInAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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
const Booking = () => {
    return (
        <div>
            <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>
                Booking
            </h1>
            <BookingDiv>
                <MyButton title={"Guests"} icon={faUser}/>
                <MyButton title={"Check-in"} icon={faCalendar}/>
                <MyButton title={"Check-out"} icon={faCalendar}/>
                <SearchButton>SEARCH</SearchButton>
            </BookingDiv>
        </div>
    );
}


const MyButton = (props) => {
    return(
        <OptionButton>
            <FontAwesomeIcon icon={props.icon} size='2x'/>
            <div>{props.title}</div>
        </OptionButton>
    )
}

const mainTextStyle = {
    marginTop: "2.5em",
    textShadow: "0 0 18px rgba(0,0,0,0.4)",
    fontFamily: "Alegreya Sans SC, Alata",
}



export default Booking;