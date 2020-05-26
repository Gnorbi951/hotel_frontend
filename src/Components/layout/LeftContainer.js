import React from "react";

const LeftContainer = (props) => {
    var greetingsText = "Welcome to Grand Hotel Codecool!";
    var text = "We at Codecool would love to see our rooms and comfy chairs again. ";

    return (<React.Fragment>
        <div className="row">
        <div className="col-6" >
            <img className={"left-element"}
                src={window.location.origin + "/pictures/cover3.png"}
                style={imageStyle}
            />
            <div style={shading}></div>
        </div>
        <div className="col-6">
        <h1 style={textStyle}><b>{greetingsText.toUpperCase()}</b><p />{text}</h1>
        </div>
        </div>
    </React.Fragment>)
}

export default LeftContainer;

const imageStyle = {
    backgroundSize: "cover",
    width: "100%",
    // height: "100%",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
}

const shading = {
    position: "absolute",
    right: "-1px",
    top: "0",
    height: "100%",
    width: "50%",
    background: "linear-gradient(to right, rgba(255,255,255,0) 0%, #fff 97%, #fff 100%)",
}

const textStyle = {
    zIndex: "1",
    color: "black",
    // textShadow: "0 0 10px rgba(0,0,0,0.4)",
    fontFamily: "Alegreya Sans SC, Alata",
    fontSize: "2em",
    textAlign: "left",
}