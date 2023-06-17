import React from "react";
import DailyActivite from "./Activite/container";
import "./dailyOverView.css";
import { FaFacebookSquare, FaTwitter, FaYoutubeSquare, FaLinkedin} from "react-icons/fa";


const DailyOverView = () => {
    return (
        <div className="content">
            <h3 className="heading">OverView - Today</h3>
            <div className="profileActivite">
                <DailyActivite title = "Page Views" number = "87" icon = {FaFacebookSquare} pron = "3" />
                <DailyActivite title = "Likes" number = "52" icon = {FaFacebookSquare} pron = "2" />
                <DailyActivite title = "Likes" number = "5462" icon = {FaLinkedin} pron = "2257" />
                <DailyActivite title = "Profile Views" number = "52K" icon = {FaLinkedin} pron = "1375" />
                <DailyActivite title = "Retweets" number = "117" icon = {FaTwitter} pron = "303" />
                <DailyActivite title = "Likes" number = "507" icon = {FaTwitter} pron = "553" />
                <DailyActivite title = "Likes" number = "107" icon = {FaYoutubeSquare} pron = "19" />
                <DailyActivite title = "Total views" number = "1407" icon = {FaYoutubeSquare} pron = "12" />
            </div>
        </div>
    );
}

export default DailyOverView;