import React, {useState} from "react";
import {Button,Modal} from 'react-bootstrap';
import Calendar from "react-calendar";
import Moment from "moment";

export const CheckInModalContext = React.createContext([[], () => {}])

const CheckInModalProvider = (props) => {
    const [show, setShow] = useState(false);
    const [inDate,setInDate] = useState(false);

    const onChange = date => {
        let formattedDate = Moment(date).format('YYYY-MM-DD');
        setInDate(formattedDate);
    }
    const handleClose = () => setShow(false);
    const handleShowIn = () => {
        setShow(true);
    }

    return (
        <CheckInModalContext.Provider
            value={{handleShowIn,inDate}}>
            {props.children}
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Select the check-in date!</Modal.Title>
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
        </CheckInModalContext.Provider>
    );
}

export default CheckInModalProvider;