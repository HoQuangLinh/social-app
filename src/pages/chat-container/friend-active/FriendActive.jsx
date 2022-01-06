import React from "react";
import Avatar from "../../../component/avatar/Avatar";
import "./friendactive.css";
const listFriends = Array.from(Array(4).keys());
const FriendActive = () => {
  return (
    <div className="friend-active-container">
      <div className="friend-active-header">
        <h3>Online now</h3>
        <span>100</span>
      </div>
      <div className="friend-active-list">
        {listFriends.map((index) => {
          return (
            <div className="friend-active-item">
              <Avatar />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendActive;
