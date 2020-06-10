import React, { useEffect, useState, Modal } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import axios from "axios";
import AddNewReservationModal from "./layout/AddNewReservationModal";
import EditReservationModal from "./layout/EditReservationModal";

const AdminViewTable = (props) => {
  const [reservations, setReservations] = useState(null);
  const [addModalShow, setAddModalShow] = useState(false);
  const [reservatedRooms, setReservatedRooms] = useState(null);
  const [modifyModalShow, setModifyModalShow] = useState(false);

  useEffect(() => {
    //TODO: swich to reservation path
    axios.get("http://localhost:8080/get-all-reserved-rooms").then((res) => {
      setReservations(res.data);
    });
    // axios.get("http://localhost:8080/get-all-reservations").then((res) => {
    //   setReservations(res.data);
    // });
  }, []);

  //console.log("anyam:" + reservations.id);

  return (
    <div>
      <h1 className="text-in-mriddle gold-text-selection" style={mainTextStyle}>
        Reservations
      </h1>
      {reservations ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>Room</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{reservation.reservation.category.name}</td>
                <td>{reservation.reservation.startDate}</td>
                <td>{reservation.reservation.endDate}</td>
                <td>{reservation.room.id}</td>
                <td>
                  <EditReservationModal
                    show={addModalShow}
                    onHide={() => setAddModalShow(false)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <Button variant="primary" onClick={() => setAddModalShow(true)}>
            New reservation
          </Button>

          <AddNewReservationModal
            show={addModalShow}
            onHide={() => setAddModalShow(false)}
          />
        </Table>
      ) : (
        <div className="card-deck ml-5 mr-3 mt-5">
          Loading reservations, please wait.
        </div>
      )}
    </div>
  );
};

export default AdminViewTable;

const mainTextStyle = {
  marginTop: "2.5em",
  textShadow: "0 0 18px rgba(0,0,0,0.4)",
  fontFamily: "Alegreya Sans SC, Alata",
};
