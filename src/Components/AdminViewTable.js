import React, { useEffect, useState, Modal } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import axios from "axios";
import AddNewReservationModal from "./layout/AddNewReservationModal";
import EditReservationModal from "./layout/EditReservationModal";

const AdminViewTable = (props) => {
  const [reservations, setReservations] = useState(null);
  const [addModalShow, setAddModalShow] = useState(false);
  const [modifyModalShow, setModifyModalShow] = useState(false);

  const [resId, setResId] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-reserved-and-reservation-joined")
      .then((res) => {
        setReservations(res.data);
      });
  });

  return (
    <div>
      <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>
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
                <td>{reservation.category.name}</td>
                <td>{reservation.startDate}</td>
                <td>{reservation.endDate}</td>
                {reservation.reservedRoom ? (
                  <td>{reservation.reservedRoom.room.id}</td>
                ) : (
                  <td>not</td>
                )}

                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setModifyModalShow(true);
                      setResId(reservation.id);
                      setCategory(reservation.category.name);
                      setCategoryId(reservation.category.id);
                      setStartDate(reservation.startDate);
                      setEndDate(reservation.endDate);
                      {
                        reservation.reservedRoom
                          ? setRoomId(reservation.reservedRoom.room.id)
                          : setRoomId(null);
                      }
                    }}
                  >
                    Modify
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <Button variant="primary" onClick={() => setAddModalShow(true)}>
            New reservation
          </Button>

          <AddNewReservationModal
            show={addModalShow}
            onHide={() => setAddModalShow(false)}
          /> */}
          <EditReservationModal
            resId={resId}
            category={category}
            categoryId={categoryId}
            startDate={startDate}
            endDate={endDate}
            roomId={roomId}
            show={modifyModalShow}
            onHide={() => setModifyModalShow(false)}
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
