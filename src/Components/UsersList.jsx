import React from "react";
import { useContext } from "react";
import { ChatContext } from "./ChatSection";
import User from "./User";
export default function UsersList() {
  const { users } = useContext(ChatContext);
  console.log(users);
  return (
    <div className="flex-[2] border-2 border-[grey] p-2 flex flex-col h-full">
      {users.map((user) => {
        return <User name={user.name} user={user} />;
      })}
    </div>
  );
}
