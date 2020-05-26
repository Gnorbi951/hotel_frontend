import React from "react";

const CoverPicture = (props) => {
    var greetingsText = "Grand Hotel Codecool"

    return (<React.Fragment>
        <div style={centerContainer}>
        <img
            src={window.location.origin + "/pictures/cover3.png"}
            style={imageStyle}
        />
        <h1 style={centerElement}><b>{greetingsText}</b></h1>
        </div>
        </React.Fragment>)


    // <h1 style={imageStyle} key="coverImage">Whatever</h1>
}

export default CoverPicture;

const imageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "relative",
}

const centerElement = {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    color: "white",
    textShadow: "0 0 18px rgba(0,0,0,0.4)",
    fontFamily: "Alegreya Sans SC, Alata",
    fontSize: "70px",
    textAlign: "center",
}

const centerContainer = {
    position: "relative",
    textAlign: "center",
}
