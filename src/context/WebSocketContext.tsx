import React, { createContext, useState } from "react";
import io from "socket.io-client";

interface webSocketProps {
  children: JSX.Element;
}

export const WebSocketContext = createContext({});

const WebSocketProvider = ({ children }: webSocketProps) => {
  const [token, setToken] = useState("");
  const socket = io("http://localhost:3000", {
    extraHeaders: {
      authorization: `Bearer ${token}`,
    },
  });

  return (
    <WebSocketContext.Provider value={{ socket, setToken, token }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
