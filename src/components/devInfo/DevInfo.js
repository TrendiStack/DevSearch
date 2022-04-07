import React from "react";
import { ReactComponent as Location } from "../../images/icon-location.svg";
import { ReactComponent as Blog } from "../../images/icon-website.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Work } from "../../images/icon-company.svg";

import "./DevInfo.css";

const DevInfo = (props) => {
  const day = props.joined.substr(8, 2);
  const month = props.joined.substr(5, 2);
  const year = props.joined.substr(0, 4);

  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const handleBio = () => {
    if (props.bio === null) {
      return "No bio available";
    }
  };

  const handleBlog = () => {
    if (props.blog === "") {
      return "Not Available";
    } else {
      return props.blog;
    }
  };
  return (
    <>
      <div className="infoContainer" data-theme={props.theme}>
        <div className="nameContainer">
          <div className="userImageContainer">
            <img src={props.avatar} alt="Profilepic" className="userImage" />
          </div>
          <div className="userNames">
            <p className="fullName">{props.user}</p>
            <a href={`https://github.com/${props.login}`} className="userName">
              {props.login}
            </a>
            <p className="joined">{`Joined ${day} ${months[month]} ${year}`}</p>
          </div>
          <p className="joined2">{`Joined ${day} ${months[month]} ${year}`}</p>
        </div>
        <div className="bio">
          <p>{handleBio()}</p>
        </div>
        <div className="stats">
          <div className="repos statsContainer">
            <h1>Repos</h1>
            <p>{props.repos}</p>
          </div>
          <div className="followers statsContainer">
            <h1>Followers</h1>
            <p>{props.followers}</p>
          </div>
          <div className="following statsContainer">
            <h1>Following</h1>
            <p>{props.following}</p>
          </div>
        </div>
        <div className="links">
          <div className="iconContainer">
            <Location className="lIcon" />
            <Blog className="bIcon" />
            <p className="location">{props.location ?? "Not Available"}</p>
            <p className="blog">{handleBlog()}</p>
          </div>

          <div className="textContainer">
            <Twitter className="tIcon" />
            <Work className="wIcon" />
            <p className="twitter">{props.twitter ?? "Not Available"}</p>
            <p className="work">{props.work ?? "Not Available"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevInfo;
