import React, { useState } from "react";
import Conversation from "../conversation/Conversation";
import "./conversations.css";
const conversations = Array.from(Array(399).keys());
const Conversations = () => {
  const [activeFriend, setActiveFriend] = useState(0);
  return (
    <div>
      <h3 style={{ padding: "15px" }}>Conversations</h3>
      <div className="conversations-list">
        {conversations.map((value, index) => {
          return (
            <Conversation
              onClick={() => {
                setActiveFriend(index);
              }}
              active={index === activeFriend}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Conversations;
