import React, { useContext } from "react";
import { ChatContext } from "./ChatSection";
export default function User({ user }) {
  const { setCurrentUser } = useContext(ChatContext);
  return (
    <div className="p-2">
      <p
        onClick={() => {
          setCurrentUser(user);
        }}
        className="name"
      >
        {user.name}
      </p>
    </div>
  );
}
