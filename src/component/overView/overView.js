import React from "react";
import Card from "./Card/card";
import "./overView.css";
import { FaFacebookSquare, FaTwitter, FaYoutubeSquare, FaLinkedin} from "react-icons/fa";

const OverView = () => {
    return (
        <div className="OverView">
            <Card name="@Sido" icon={FaFacebookSquare} numbers = "1987" desc = "FOLLOWERS" days = "12" />
            <Card name="@Sido" icon={FaTwitter} numbers = "1044" desc = "FOLLOWERS" days = "99" />
            <Card name="@Sido" icon={FaLinkedin} numbers = "11K" desc = "FOLLOWERS" days = "1099" />
            <Card name="@Sido" icon={FaYoutubeSquare} numbers = "8239" desc = "SUBSCRIBERS" days = "144" />
        </div>
    );
}

export default OverView;