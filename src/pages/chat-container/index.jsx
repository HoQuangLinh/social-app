import React from "react";
import FriendActive from "./friend-active/FriendActive";
import "./index.css";
import Conversations from "./conversations/Conversations";
import MyProfile from "./my-profile/MyProfile";
import Message from "./message/Message";
import Avatar from "../../component/avatar/Avatar";
import FriendProfile from "./friend-profile/FriendProfile";
const ChatContainer = () => {
  const messages = Array.from(Array(39).keys());
  return (
    <div className="row no-gutters chat-container ">
      <div className="left col-3 ">
        <MyProfile />
        <FriendActive />
        <Conversations />
      </div>
      <div className="middle col-6">
        <div className="messages-header">
          <Avatar
            style={{ width: "43px", height: "43px", marginRight: "10px" }}
          />
          <h3>Lê Minh Nam</h3>
        </div>
        <div className="messages-list">
          {messages.map((value, index) => {
            return <Message own={index % 2 === 1} />;
          })}
        </div>
        <div className="messages-footer">
          <div className="messages-input">
            <input type="text" placeholder="Aa" />
            <i class="bx bx-send btn-send"></i>
          </div>
        </div>
      </div>
      <div className="right col-3">
        <FriendProfile />
      </div>
    </div>
  );
};

export default ChatContainer;
