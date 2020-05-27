import React from "react";
import CoverPicture from "./layout/CoverPicture";
import LeftContainer from "./layout/LeftContainer";
import RightContainer from "./layout/RightContainer";
import RoomTabs from "./layout/RoomTabs";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Home = () => {
  return (
    <React.Fragment>
      <ScrollAnimation animateIn="fadeIn" animateOnce="true" offset="123">
        <CoverPicture />
      </ScrollAnimation>
      <div
        className="container-fluid"
        style={{ maxWidth: "3000px", padding: "0" }}
      >
        <ScrollAnimation animateIn="fadeIn">
          <LeftContainer />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <RightContainer />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <RoomTabs />
        </ScrollAnimation>
      </div>
      <div>This is the homepage</div>
      <h4>Welcome to our hotel</h4>
    </React.Fragment>
  );
};

export default Home;
