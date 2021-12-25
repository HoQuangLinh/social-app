import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Layout from "./layout/Layout";
import SideBar from "./layout/sidebar";
import ChatContainer from "./pages/chat-container";
import { BrowserRouter as Router } from "react-router-dom";
import RouterLayout from "./routers/RouterLayout";
const App = () => {
  useEffect(() => {
    let socket = io("http://localhost:5000");
    socket.on("hello", ({ name }) => {
      console.log(name);
    });
  }, []);
  return (
    <Router>
      <SideBar />
      <RouterLayout />
    </Router>
  );
};

export default App;
