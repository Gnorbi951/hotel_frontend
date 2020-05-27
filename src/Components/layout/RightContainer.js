import React from "react";

const LeftContainer = (props) => {
    var greetingsText = "Welcome to Grand Hotel Codecool!";
    var text = "We at Codecool would love to see our rooms and comfy chairs again. Now for a little money, " +
        "you can live the dream - the one you had before the COVID-19 pandemic. Come and see our new office!";

    return (
        <div className="row" style={{overflow: "hidden", marginTop: "2em"}}>
                <div className="col-6 align-bottom text-in-middle">
                    <h1 className="text-center align-bottom card-text"><b>{greetingsText.toUpperCase()}</b><p />
                        {text}
                    </h1>
                </div>
                <div className="col-6" >
                    <img className="half-page-image"
                         src={window.location.origin + "/pictures/cover3.png"}
                    />
                    <div style={leftSideShading} />
                </div>

        </div>
    )
}

export default LeftContainer;

const leftSideShading = {
    position: "absolute",
    left: "-1px",
    top: "0",
    height: "100%",
    width: "50%",
    background: "linear-gradient(to left, rgba(255,255,255,0) 0%, #fff 97%, #fff 100%)",
}
