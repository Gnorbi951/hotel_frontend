import React from "react";

const LeftContainer = (props) => {
  const greetingsText = props.textHeader;
  const text = props.textBody;
  const picture = props.image;

  return (
    <div className="row" style={{ overflow: "hidden", marginTop: "2em" }}>
      <div className="col-6 align-bottom text-in-middle">
        <h1 className="text-center align-bottom card-text">
          <b>{greetingsText.toUpperCase()}</b>
          <p />
          {text}
        </h1>
      </div>
      <div className="col-6">
        <img
          className="half-page-image"
          src={picture}
          alt="right_image"
        />
        <div style={leftSideShading} />
      </div>
    </div>
  );
};

export default LeftContainer;

const leftSideShading = {
  position: "absolute",
  left: "-1px",
  top: "0",
  height: "100%",
  width: "50%",
  background:
    "linear-gradient(to left, rgba(255,255,255,0) 0%, #fff 97%, #fff 100%)",
};
