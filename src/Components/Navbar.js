import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [scrollY, setScrollY] = React.useState(window.pageYOffset);

    const getScrollY = () => {
        setScrollY(window.pageYOffset);
        console.log(scrollY)
    };
    window.addEventListener("scroll", getScrollY);
  return (
    <div
        style={{
        position: "fixed",
        top: "0px",
        zIndex: "1",
        }}
    >
        { scrollY > 50 ? (
            <NavBarHeaderOpacity>
                <MyLink to={"/"}>Home</MyLink>
                {/*<MyLink to={"/rooms"}>Rooms</MyLink>*/}
                <MyLink to={"/reservations"}>Reservations</MyLink>
                <LoginIcon to={"/login"}>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </LoginIcon>
            </NavBarHeaderOpacity>
        ) : (
            <NavBarHeader>
                <MyLink to={"/"}>Home</MyLink>
                {/*<MyLink to={"/rooms"}>Rooms</MyLink>*/}
                <MyLink to={"/reservations"}>Reservations</MyLink>
                <LoginIcon to={"/login"}>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </LoginIcon>
            </NavBarHeader>
        )}

    </div>
  );
};

//Todo: Change color to a color palette

const NavBarHeader = styled.header`
  padding: 1rem;
  background-color: #2b2b2b;
  display: flex;
  width: 99.9vw;
  flex-direction: row;
  /* justify-content: flex-begin; */
  margin: 0;
`;

const NavBarHeaderOpacity = styled.header`
  padding: 1rem;
   background-color: #2b2b2b;
  display: flex;
  width: 99.9vw;
  flex-direction: row;
  /* justify-content: flex-begin; */
  margin: 0;
  opacity: .8;
  transition: opacity 4s linear;
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
