import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const CoverPicture = (props) => {
  var greetingsText = "Grand Hotel Codecool";

  return (
    <React.Fragment>
      <div style={centerContainer}>
        <img
          src={window.location.origin + "/pictures/cover3.png"}
          style={imageStyle}
          alt="cover_picture"
        />
        <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="0.1s" duration="2s" offset="124">
        <h1 style={centerElement}>
          <b>{greetingsText}</b>
        </h1>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default CoverPicture;

const imageStyle = {
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  position: "relative",
};

const centerElement = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "1",
  color: "white",
  textShadow: "0 0 18px rgba(0,0,0,0.4)",
  fontFamily: "Alegreya Sans SC, Alata",
  // fontSize: "70px",
  fontSize: "5em",
  textAlign: "center",
};

const centerContainer = {
  position: "relative",
  textAlign: "center",
};
