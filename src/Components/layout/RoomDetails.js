import React, {useEffect, useState} from "react";

const RoomDetails = (props) => {

    let object = props;

    return (<div>
                <h3>{object.props.name}</h3>
                <h4>Description: {object.props.description}</h4>
                <h4>{object.props.capacity}</h4>
                <h4>{object.props.size} squaremeters</h4>
            </div>)
}

export default RoomDetails;