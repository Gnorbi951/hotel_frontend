import React, { useEffect, useState, Modal } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const AdminViewTable = (props) => {
  const [reservations, setReservations] = useState(null);

  useEffect(() => {
    //TODO: swich to reservation path
    axios.get("http://localhost:8080/room/allOccupiedRooms").then((res) => {
      setReservations(res.data);
    });
  }, []);

  console.log("reservations at init:" + reservations);

  return (
    <div>
      <h1 className="text-in-middle gold-text-selection" style={mainTextStyle}>
        Reservations
      </h1>
      {reservations ? (
        <Table striped bordered hover sizw="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{reservation.category.name}</td>
              </tr>
            ))}
          </tbody>
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
