import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatContainer from "../pages/chat-container";
import Home from "../pages/home";
const RouterLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatContainer />} />
    </Routes>
  );
};

export default RouterLayout;
