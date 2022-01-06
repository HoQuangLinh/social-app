import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
const sidebarConfig = [
  {
    name: "home",
    route: "/home",
    icon: <i class="bx bx-home-alt"></i>,
  },
  {
    name: "chat",
    route: "/chat",
    icon: <i class="bx bx-message-rounded-dots"></i>,
  },
  {
    name: "user",
    route: "/user",
    icon: <i class="bx bx-user-pin"></i>,
  },
  {
    name: "phone",
    route: "/phone",
    icon: <i class="bx bx-phone-call"></i>,
  },
  {
    name: "user",
    route: "/user",
    icon: <i class="bx bx-bookmark-minus"></i>,
  },
  {
    name: "phone",
    route: "/phone",
    icon: <i class="bx bx-cog"></i>,
  },
];
const SideBar = () => {
  return (
    <div className="sidebar">
      {sidebarConfig.map((sidebar) => {
        return (
          <div className="siderbar-item">
            <Link to={sidebar.route}>{sidebar.icon}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
