import React from "react";
import { useContext } from "react";
import { ChatContext } from "./ChatSection";
import { useRef } from "react";
function Message({ message }) {
  return (
    <div
      className={`w-full ${
        message.messageType === "sender" ? "text-right" : "text-left"
      }`}
    >
      <p className="text-black">{message.messageText}</p>
    </div>
  );
}

export default function UserChatWindow() {
  const { currentUser, setUsers, users, setCurrentUser } =
    useContext(ChatContext);
  const messageRef = useRef();
  function handleMessage() {
    const message = messageRef.current.value;
    const messageDEtails = {
      messageType: "sender",
      messageText: message,
      reactions: [],
    };
    const updatedUsers = users.map((user) => {
      if (user.id === currentUser.id) {
        return {
          ...user,
          messages: [...user.messages, messageDEtails],
        };
      } else {
        return user;
      }
    });
    console.log(updatedUsers);
    setUsers(updatedUsers);
    const curuser = updatedUsers.find((user) => user.id === currentUser.id);
    setCurrentUser(curuser);
  }

  return (
    <div className="flex-[8] flex flex-col justify-between h-full border-2 border-[grey] p-2">
      <div>
        {currentUser.messages.map((message) => {
          return <Message message={message} />;
        })}
      </div>

      <input
        ref={messageRef}
        type="text"
        className="w-full p-2 text-black border"
      />
      <button onClick={handleMessage}>Send</button>
    </div>
  );
}
