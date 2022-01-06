import React from "react";
import Avatar from "../../../component/avatar/Avatar";
import "./friendprofile.css";
const FriendProfile = () => {
  return (
    <div>
      <div className="friend-profile-header">
        <Avatar style={{ width: "80px", height: "80px" }} />
        <h4>Hồ Quang Hào</h4>
        <p>Active 1h ago</p>
      </div>
      <ul className="friend-profile-list">
        <li>Customise chat</li>
        <li>Privacy and support</li>
        <li>Shared files</li>
        <li>Shared media</li>
      </ul>
    </div>
  );
};

export default FriendProfile;
