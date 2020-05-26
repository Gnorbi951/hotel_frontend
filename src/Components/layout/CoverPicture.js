import React from "react";

const CoverPicture = (props) => {
    var greetingsText = "Welcome to Codecool Hotel"

    return (<React.Fragment>
        <img
            src={window.location.origin + "/pictures/cover3.png"}
            style={imageStyle}
        />
        <h1 style={centerElement}>{greetingsText.toUpperCase()}</h1>
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
    backgroundColor: "grey",
    border: "20px solid grey",
    borderRadius: "15px",
    opacity: "80%",
}