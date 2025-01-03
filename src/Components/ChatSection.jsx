import React, { useContext, useState } from "react";
import { createContext } from "react";
export const ChatContext = createContext();
export function ChatSection({ children }) {
  const [users, setUsers] = useState([
    {
      name: "Dinesh",
      id: "1",
      email: "akepatidinu@gmail.com",
      isActive: false,
      messages: [
        {
          messageType: "sender",
          messageText: "hello",
          reactions: [],
        },
        {
          messageType: "receiver",
          messageText: "hety",
          reactions: [],
        },
      ],
    },
    {
      name: "reddy",
      id: "2",
      email: "akepatireddy@gmail.com",
      isActive: false,
      messages: [
        {
          messageType: "receiver",
          messageText: "hiii",
          reactions: [],
        },
      ],
    },
    {
      name: "Raju",
      id: "3",
      email: "akepatiraju@gmail.com",
      isActive: false,
      messages: [
        {
          messageType: "raju",
          messageText: "",
          reactions: [],
        },
      ],
    },
  ]);
  const [currentUser, setCurrentUser] = useState(users[0]);
  return (
    <ChatContext.Provider
      value={{
        users: users,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        setUsers: setUsers,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
