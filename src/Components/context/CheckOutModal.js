import React, {useState} from "react";
import {Button,Modal} from 'react-bootstrap';
import Calendar from "react-calendar";
import Moment from 'moment';


export const CheckOutModalContext = React.createContext([[], () => {}])

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
                        <Calendar
                            onChange={onChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/*<Button variant="primary">Understood</Button>*/}
                    </Modal.Footer>
                </Modal>
            </>
        </CheckOutModalContext.Provider>
    );
}

export default CheckOutModalProvider;