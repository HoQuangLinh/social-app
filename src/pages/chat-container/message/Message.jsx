import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <img
        className="messageImg"
        src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <p className="messageText">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        dignissimos! Aut quibusdam totam quasi non! Dolorem aliquid culpa
        dignissimos repellat cumque sint temporibus fugiat, veniam deserunt
        porro expedita in ipsa.
      </p>
    </div>
  );
}
