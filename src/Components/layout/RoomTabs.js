import React, {useEffect} from "react";
import LeftContainer from "./LeftContainer";

const RoomTabs = (props) => {
    const addListenters = () => {
        let buttons = document.getElementsByClassName("btn");
        for (let button of buttons) {
            button.addEventListener("click", () => alert(button.dataset.id))
        }
    }

    useEffect(addListenters, []);

    return (<React.Fragment>
            <button type="button" className="btn btn-secondary" data-id="1">First</button>
            <button type="button" className="btn btn-secondary" data-id="2">Second</button>
            <LeftContainer />
    </React.Fragment>
    )}


export default RoomTabs;