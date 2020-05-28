import React from "react";

const LeftContainer = (props) => {
  const greetingsText = props.textHeader;
  const text = props.textBody;
  const picture = props.image;

  return (
    <div className="row" style={{ overflow: "hidden", marginTop: "2em" }}>
      <div className="col-6">
        <img className="half-page-image" src={picture} alt="left_image" />
        <div className="right-side-picture-shade" />
      </div>
      <div className="col-6 text-in-middle">
        <h1 className="text-center align-bottom card-text gold-text-selection">
          <b className="gold-text-selection">{greetingsText.toUpperCase()}</b>
          <p />
          {text}
        </h1>
      </div>
    </div>
  );
};

export default LeftContainer;
