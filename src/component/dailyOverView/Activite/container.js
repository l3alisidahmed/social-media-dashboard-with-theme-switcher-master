import React from "react";
import "./container.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";


const DailyActivite = (props) => {
    return (
        <div className="AnalyseCard">
            <div className="Activite">
                <p>{props.title}</p>
                <props.icon className = "icon" /> 
            </div>
            <div className="numbers">
                <h3 className="nbr">{props.number}</h3>
                <div className="pron">
                    <FaCaretUp />
                    <p>{props.pron}%</p>
                </div>
            </div>
        </div>
    );
}

export default DailyActivite;