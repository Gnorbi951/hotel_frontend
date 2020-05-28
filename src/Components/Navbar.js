import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <React.Fragment>
      <NavBarHeader>
        <MyLink to={"/"}>Home</MyLink>
        <MyLink to={"/rooms"}>Rooms</MyLink>
        <LoginIcon to={"/login"}>
          <FontAwesomeIcon icon={faSignInAlt} />
        </LoginIcon>
      </NavBarHeader>
    </React.Fragment>
  );
};

//Todo: Change color to a color palette

const NavBarHeader = styled.header`
  padding: 1rem;
  background-color: #2b2b2b;
  display: flex;
  flex-direction: row;
  /* justify-content: flex-begin; */
  margin: 0;
`;

const LoginIcon = styled(Link)`
  font-size: 1.8rem;
  color: #ffffff;
  margin-left: auto;
  &:hover {
    transition: 350ms;
    color: #a9a9a9;
    text-decoration: none;
  }
`;

const MyLink = styled(Link)`
  margin: 0.2rem 1rem;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    transition: 350ms;
    color: #a9a9a9;
    text-decoration: none;
  }
  font-size: 1.5rem;
`;

export default Navbar;
