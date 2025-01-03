import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ChatSection } from "./components/ChatSection";
import UsersList from "./components/UsersList";
import ChatWrapper from "./components/ChatWrapper";
import UserChatWindow from "./components/UserChatWindow";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChatSection>
    <ChatWrapper>
      <UsersList />
      <UserChatWindow />
    </ChatWrapper>
  </ChatSection>
);
