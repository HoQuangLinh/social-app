import React from "react";
import Avatar from "../../../component/avatar/Avatar";
import "./my-profile.css";
const MyProfile = () => {
  return (
    <div className="my-profile">
      <Avatar src="https://res.cloudinary.com/hoquanglinh/image/upload/v1639459232/Linh/vqrzga5ncigbvauybbyf.png" />
      <div className="my-profile-info">
        <p className="my-profile-name">Hồ Quang Linh</p>
        <p className="my-profile-position">Software Engineer</p>
      </div>
    </div>
  );
};

export default MyProfile;
