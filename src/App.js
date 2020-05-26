import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Switch, Route, Link
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Rooms from "./Components/Rooms";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
      </Router>
    </React.Fragment>
  );
};

export default App;
