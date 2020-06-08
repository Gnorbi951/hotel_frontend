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

document.title = "Grand Hotel Codecool";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reservations" component={Reservation} />
        <Route exact path="/admin" component={AdminView} />
      </Router>
    </React.Fragment>
  );
};

export default App;
