import React from "react";
import Avatar from "../../../component/avatar/Avatar";
import "./conversation.css";
const Conversation = ({ name, conversation, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`conversation-item ${active ? "active" : ""}`}
    >
      <Avatar />
      <div className="conversation-content">
        <div className="conversation-title">
          <h4>Ho Quang Linh</h4>
        </div>
        <p className="conversation-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit
          sunt corrupti consectetur quam a beatae, iusto consequuntur ut veniam
          sequi, blanditiis repellendus animi quaerat deleniti dolore cum vero
          magni!
        </p>
      </div>
    </div>
  );
};

export default Conversation;
