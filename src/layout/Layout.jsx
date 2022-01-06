import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterLayout from "../routers/RouterLayout";
import SideBar from "./sidebar";
import "./layout.css";
const Layout = () => {
  return (
    <Router>
      <SideBar />
      <div className="layout-content">
        <RouterLayout />
      </div>
    </Router>
  );
};

export default Layout;
