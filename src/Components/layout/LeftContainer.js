import React from "react";

const LeftContainer = (props) => {
    var greetingsText = "Welcome to Grand Hotel Codecool!";
    var text = "We at Codecool would love to see our rooms and comfy chairs again. Now for a little money, " +
        "you can live the dream - the one you had before the COVID-19 pandemic. Come and see our new office!";

    return (<React.Fragment>
        <div className="row" style={{overflow: "hidden", marginTop: "2em"}}>
            <div className="col-6" >
                <img className={"left-element"}
                    src={window.location.origin + "/pictures/cover3.png"}
                    style={imageStyle}
                />
                <div style={shading}></div>
            </div>
            <div className="col-6">
                <h1 style={textStyle} className="text-center align-bottom"><b>{greetingsText.toUpperCase()}</b><p />
                    {text}
                </h1>
            </div>
        </div>
    </React.Fragment>)
}

export default LeftContainer;

const imageStyle = {
    backgroundSize: "cover",
    width: "100%",
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
    paddingTop: "2em",
    zIndex: "1",
    color: "black",
    fontFamily: "Alegreya Sans SC, Alata",
    fontSize: "2em",
    textAlign: "left",
}