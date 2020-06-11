import React, {useContext, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar, faUser} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import {CheckInModalContext} from "./context/CheckInModal";
import {CheckOutModalContext} from "./context/CheckOutModal";
import ScrollAnimation from "react-animate-on-scroll";
import BookingPageRoomCard from "./layout/BookinPageRoomCard";
import Moment from "moment";

const PageImage = styled.img`
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: relative;
`

const OptionButton = styled.button`
    border: 0.2em solid #fcad26;
    color: #fcad26;
    background-color: white;
    margin-left: 0.2em;
    padding: 0.5em 2em;
    margin-top: 1em;
    cursor: pointer;
    & div {
        float: left;
        margin-top: 1.4em;
    }
    & b {
        text-align: center;
        font-weight: bold;
        font-size: 1.5em;
        float: right;
        margin-top: 0.4em;
        margin-left: 1em;
    }
    & p {
        text-align: center;
        margin-left: 3em;
    }
`
const BookingDiv = styled.div`
    position: absolute center;
    margin-left: 5%;
    & div.results p {
        font-size: 2em;
        margin-left: 30%;
        margin-top: 1em;
        color: #fcad26;
    }   
`

const SearchButton = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1em;
    background: #2b2b2b;
    margin-right: 0.2em;
    color: #fff;
    cursor: pointer;
    padding: 0.4em 0.8em;
    float: left;
    border-radius: 1em;
`

const Booking = (props) => {
    const { handleShowIn,inDate } = useContext(CheckInModalContext);
    const { handleShowOut,outDate} = useContext(CheckOutModalContext);
    const [ resultRooms,setResultRooms] = useState(null);
    const currentDate = Moment(Date.now()).format('YYYY-MM-DD');

    const searchForAvailableRoom = (id,inDate,outDate) => {
        let start;
        let end;

        start = ((!inDate) ? currentDate : inDate);
        end = ((!outDate) ? currentDate :outDate);

          axios
            .get(`http://localhost:8080/category/get-available-categories-in-time-frame/${start}/${end}`)
            .then((res) => {
                setResultRooms(res.data)
            });
    }

    const CustomButton = ({click,icon,title,date}) => {
        let line;

        line = title === "Guests" ? "4 Guests": !date ? currentDate: date;

        return(
            <OptionButton onClick={click}>
                <div>
                    <FontAwesomeIcon icon={icon} size='2x'/>
                </div>
                <b>{title}</b>
                <p>{line}</p>
            </OptionButton>
        )
    }

    return (
        <div>
            <PageImage
                src={window.location.origin + "/pictures/bookingpicture.png"}
                alt="cover_picture"
            />
            <ScrollAnimation animateIn="fadeIn">
                <BookingDiv>
                    <SearchButton onClick={() => searchForAvailableRoom(props.match.params.id,inDate,outDate)}>SEARCH</SearchButton>
                    <CustomButton icon={faUser} title={"Guests"}/>
                    <CustomButton icon={faCalendar} click={handleShowIn} title={"Check-in"} date={inDate}/>
                    <CustomButton icon={faCalendar} click={handleShowOut} title={"Check-out"} date={outDate}/>
                    <div className="results">
                        {resultRooms ? (
                            resultRooms.map((room, index) => (
                            <BookingPageRoomCard room={room} key={index} inDate={inDate} outDate={outDate}/>
                        ))):(
                            <p>There is no available rooms</p>
                        )}
                    </div>
                </BookingDiv>
            </ScrollAnimation>
        </div>
    );
}

export default Booking;