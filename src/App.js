import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Switch, Route, Link
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Rooms from "./Components/Rooms";
import Login from "./Components/Login";
import Reservation from "./Components/Reservation";
import AdminView from "./Components/AdminView";
import AdminViewTable from "./Components/AdminViewTable";
import Booking from "./Components/Booking";
import CheckInModalProvider from "./Components/context/CheckInModal";
import CheckOutModalProvider from "./Components/context/CheckOutModal";


document.title = "Grand Hotel Codecool";

const App = () => {
  return (

      <CheckOutModalProvider>
          <CheckInModalProvider>
            <React.Fragment>
              <Router>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms" component={Rooms} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/reservations" component={Reservation} />
                <Route path="/booking/:id" component={Booking} />
                <Route exact path="/admin" component={AdminViewTable} />
              </Router>
            </React.Fragment>
          </CheckInModalProvider>
      </CheckOutModalProvider>

  );
};

export default App;
