import React from "react";
import CoverPicture from "./layout/CoverPicture";
import LeftContainer from "./layout/LeftContainer";
import RightContainer from "./layout/RightContainer";
import RoomTabs from "./layout/RoomTabs";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Home = () => {
    let leftTextHead = "Welcome to Grand Hotel Codecool!";
    let leftText = "We at Codecool would love to see our rooms and comfy chairs again. Now for a little money, " +
        "you can live the dream - the one you had before the COVID-19 pandemic. Come and see our new office!";

    let pictureLocation = window.location.origin + "/pictures/cover3.png";

  return (
    <React.Fragment>
        <CoverPicture />
      <div
        className="container-fluid"
        style={{ maxWidth: "3000px", padding: "0" }}
      >
        <ScrollAnimation animateIn="fadeIn">
          <LeftContainer textHeader={leftTextHead} textBody={leftText} image={pictureLocation} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <RightContainer textHeader={leftTextHead} textBody={leftText} image={pictureLocation} />
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
