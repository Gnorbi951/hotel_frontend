import React from "react";
import CoverPicture from "./layout/CoverPicture";
import LeftContainer from "./layout/LeftContainer";


const Home = () => {
  return (
    <React.Fragment>
        <CoverPicture />
        <div className="container-fluid">
            <LeftContainer />
        </div>
      <div>This is the homepage</div>
      <h4>Welcome to our hotel</h4>
    </React.Fragment>
  );
};

export default Home;
