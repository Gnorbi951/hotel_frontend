import React from "react";
import CoverPicture from "./layout/CoverPicture";
import LeftContainer from "./layout/LeftContainer";
import RightContainer from "./layout/RightContainer";
import RoomTabs from "./layout/RoomTabs";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Home = () => {
    const leftTextHead = "Welcome to Grand Hotel Codecool!";
    const rightTextHead = "Make sure to choose the right location!";
    const leftText = "We at Codecool would love to see our rooms and comfy chairs again. Now for a little money, " +
        "you can live the dream - the one you had before the COVID-19 pandemic. Come and see our new office!";
    const rightText = "Positioned in an unparalleled location, right in the heart of Budapest's Broadway, the" +
        " property is surrounded by the city’s buzziest theatres, clubs, restaurants, and even the local Walk of Fame."


    const leftPicture = window.location.origin + "/pictures/left_side.jpeg";
    const rightPicture = window.location.origin + "/pictures/right_side.jpg";

  return (
    <React.Fragment>
        <CoverPicture />
      <div
        className="container-fluid"
        style={{ maxWidth: "3000px", padding: "0" }}
      >
        <ScrollAnimation animateIn="fadeIn">
          <LeftContainer textHeader={leftTextHead} textBody={leftText} image={leftPicture} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <RightContainer textHeader={rightTextHead} textBody={rightText} image={rightPicture} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <RoomTabs />
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default Home;
