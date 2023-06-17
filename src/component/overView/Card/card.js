import React from "react";
import "./card.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Card = (props) => {
    // const beforCard = {
    //     content: "",
    //     borderRadius: "3px 3px 0 0",
    //     width: "100%",
    //     height: "7px",
    //     backgroundColor: "brown",
    //     position: "relative",
    //     top: "-3px",
    //   };
    return (
        <div className="Card">
            <div className="ProfileName">
                <props.icon className="FaFacebook"/>
                <p>{props.name}</p>
            </div>
            <h1>{props.numbers}</h1>
            <p className="Followers">{props.desc}</p>
            <div className="Days">
                <FaCaretUp />
                <p>{props.days} Today</p>
            </div>
        </div>
    );
}

export default Card;