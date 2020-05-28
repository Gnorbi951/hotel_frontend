import React, { useState, useContext, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import axios from "axios";
import index from "styled-components/dist/styled-components-macro.esm";

const ReservedRoomCard = (props) => {
    const room = props.room.category;

    const [isFlipped, setIsFlipped] = useState(false);

    let setFlipCard = (e) => {
        e.preventDefault();
        isFlipped ? setIsFlipped(false) : setIsFlipped(true);

    };

    let cardFront = (
        <>
            {room ? (
                <div
                    id={`${room.id}-front`}
                    className="card border-secondary mt-1 mb-3 clearfix overflow-hidden "
                    style={cardStyle}
                >
                    <h5 className="card-body gold-text-selection" style={{ textAlign: "center" }} onClick={setFlipCard}>
                        You haven't reserved any rooms yet.
                    </h5>

                </div>
            ) : (
                <div
                    id={index}
                    className="card border-secondary mt-1 mb-3 clearfix overflow-hidden "
                    style={cardStyle}
                >
                    <h5 className="card-body gold-text-selection" style={{ textAlign: "center" }} onClick={setFlipCard}>
                        You haven't reserved any rooms yet.
                    </h5>

                </div>
            )}

        </>
    );

    let cardBack = (
            <>
                { room ? (
                    <div
                        id={`${room.id}-back`}
                        className="card border-secondary mt-1 mb-3 clearfix overflow-hidden"
                        style={cardStyle}
                    >
                        <div className="card-body" onClick={setFlipCard}>
                            <div className="backdrop-container">
                                <img
                                    // src={`https://image.tmdb.org/t/p/${imageSizes.backdrop_sizes[0]}${backdrop}`}
                                    alt={`  NO PICTURE AVAILABLE FOR ${room.name.toUpperCase()}`}
                                    // style={centerImage}
                                />
                            </div>
                            <div>
                                <h5 className="card-title gold-text-selection" style={{
                                    textAlign: "center",
                                    top: "50%",
                                    right: "50%",
                                    transform: "translate(50%, 50%)"
                                }}>
                                    {`${room.name.toUpperCase()}`}
                                </h5>
                                <p className="card-text overflow-hidden gold-text-selection">
                                    {room.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        id={index}
                        className="card border-secondary mt-1 mb-3 clearfix overflow-hidden"
                        style={cardStyle}
                    >
                        <div className="card-body" onClick={setFlipCard}>
                            <div className="backdrop-container">
                            </div>
                            <div>
                                <h5 className="card-title gold-text-selection" style={{ textAlign: "center" }}>
                                    No description to show yet. Please reserve a room first from the main page.
                                </h5>
                            </div>
                        </div>
                    </div>
                )

                }


        </>)



    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div>{cardFront}</div>
            <div>{cardBack}</div>
        </ReactCardFlip>
    )
}

export default ReservedRoomCard;

const cardStyle = {
    width: "18rem",
    minHeight: "28rem",
    height: "28rem",
    backgroundColor: "dimgrey",
    borderRadius: "8px",
    textAlign: "justify",
    boxShadow:
        "  0 2.8px 2.2px rgba(200, 200, 200, 0.034),\n" +
        "  0 6.7px 5.3px rgba(200, 200, 200, 0.048),\n" +
        "  0 12.5px 10px rgba(200, 200, 200, 0.06),\n" +
        "  0 22.3px 17.9px rgba(200, 200, 200, 0.072),\n" +
        "  0 41.8px 33.4px rgba(200, 200, 200, 0.086),\n" +
        "  0 100px 80px rgba(200, 200, 200, 0.12)",

};