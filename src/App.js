import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Layout from "./layout/Layout";
import SideBar from "./layout/sidebar";
import ChatContainer from "./pages/chat-container";
import { BrowserRouter as Router } from "react-router-dom";
import RouterLayout from "./routers/RouterLayout";
const App = () => {
  useEffect(() => {
    const userId = "61cea2e907d306c8c9e040ba";
    let socket = io("http://localhost:5000");
    socket.emit("active", userId);
  }, []);
  return <Layout />;
};

export default App;
