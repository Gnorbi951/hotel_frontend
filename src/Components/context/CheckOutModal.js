import React, {useState} from "react";
import {Button,Modal} from 'react-bootstrap';
import Calendar from "react-calendar";
import Moment from 'moment';
import styled from "styled-components";


export const CheckOutModalContext = React.createContext([[], () => {}])

const CalendarDiv = styled.div`
    margin-left: 3.5em;
`
const CheckOutModalProvider = (props) => {
    const [show, setShow] = useState(false);
    const [outDate,setOutDate] = useState(false);

    const onChange = date => {
        let formattedDate = Moment(date).format('YYYY-MM-DD');
        setOutDate(formattedDate);
    }
    const handleClose = () => setShow(false);
    const handleShowOut = () => {
        setShow(true);
    }

    return (
        <CheckOutModalContext.Provider
            value={{handleShowOut,outDate}}>
            {props.children}
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Select the check-out date!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CalendarDiv>
                            <Calendar
                                onChange={onChange}
                            />
                        </CalendarDiv>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </CheckOutModalContext.Provider>
    );
}

export default CheckOutModalProvider;