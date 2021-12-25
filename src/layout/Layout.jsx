import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterLayout from "../routers/RouterLayout";
import SideBar from "./sidebar";
const Layout = () => {
  return (
    <Router>
      <div>hello</div>
      <SideBar />
      <RouterLayout />
    </Router>
  );
};

export default Layout;
