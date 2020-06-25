import React, { useEffect, useState, Modal } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import axios from "axios";
import AddNewReservationModal from "./layout/AddNewReservationModal";
import EditReservationModal from "./layout/EditReservationModal";
import DeleteReservationModal from "./layout/DeleteReservationModal";

const AdminViewTable = (props) => {
  const [reservations, setReservations] = useState(null);
  const [users, setUsers] = useState(null);
  const [addModalShow, setAddModalShow] = useState(false);
  const [modifyModalShow, setModifyModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);

  const [resId, setResId] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [roomId, setRoomId] = useState(null);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-reserved-and-reservation-joined", config)
      .then((res) => {
        setReservations(res.data);
      });
    axios
      .get("http://localhost:8080/get-all-user-with-reservation")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  console.log(reservations);
  console.log(users);

  return (
    <div>
      <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>
        Reservations
      </h1>
      {reservations && users ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Username</th>
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
                  <td>Doesn't specified yet</td>
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
                  <Button
                    onClick={() => {
                      setDeleteModalShow(true);
                      setResId(reservation.id);
                    }}
                  >
                    Delete
                  </Button>
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
          <DeleteReservationModal
            resId={resId}
            show={deleteModalShow}
            onHide={() => setDeleteModalShow(false)}
          />
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
