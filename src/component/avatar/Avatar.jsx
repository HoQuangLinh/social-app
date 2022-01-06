import React from "react";
import "./avatar.css";
const Avatar = ({ src, style }) => {
  return (
    <img
      style={style}
      className="avatar"
      src={
        "https://res.cloudinary.com/hoquanglinh/image/upload/v1639459232/Linh/vqrzga5ncigbvauybbyf.png"
      }
      alt=""
    />
  );
};

export default Avatar;
