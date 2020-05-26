import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Navbar ;)</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/rooms"}>Rooms</Link>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
