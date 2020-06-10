import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar, faUser} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Example from "./layout/Modal";
import {Button, Modal} from "react-bootstrap";

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

const onChange = date => console.log(date);
const handleClick = () => {
    console.log('The link was clicked.');
}

const Booking = (props) => {
    // const [show, setShow] = useState(false);
    //
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    return (
        <div>
            <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>
                Booking
                <br/>
                {props.match.params.id}
            </h1>
            <BookingDiv>
                <SearchButton>SEARCH</SearchButton>
                <OptionButton onClick={() => { handleClick() }}>
                    <FontAwesomeIcon icon={faUser} size='2x'/>
                    <div>Guests</div>
                </OptionButton>
                <OptionButton onClick={() => { handleClick() }}>
                    <FontAwesomeIcon icon={faCalendar} size='2x'/>
                    <div>Check-in</div>
                </OptionButton>
                <OptionButton onClick={() => { handleClick() }}>
                    <FontAwesomeIcon icon={faCalendar} size='2x'/>
                    <div>Check-out</div>
                </OptionButton>
            </BookingDiv>



            <Calendar
                onChange={onChange}
            />



            {/*<Modal*/}
            {/*    show={show}*/}
            {/*    onHide={handleClose}*/}
            {/*    backdrop="static"*/}
            {/*    keyboard={false}*/}
            {/*>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Modal title</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        I will not close if you click outside me. Don't even try to press*/}
            {/*        escape key.*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={handleClose}>*/}
            {/*            Close*/}
            {/*        </Button>*/}
            {/*        <Button variant="primary">Understood</Button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}
        </div>
    );
}

const mainTextStyle = {
    marginTop: "2.5em",
    textShadow: "0 0 18px rgba(0,0,0,0.4)",
    fontFamily: "Alegreya Sans SC, Alata",
}



export default Booking;