import React, { createContext } from "react";
import io from "socket.io-client";

interface webSocketProps {
  children: JSX.Element;
}

export const WebSocketContext = createContext({});

const WebSocketProvider = ({ children }: webSocketProps) => {
  const socket = io('http://localhost:3000');

  return (
    <WebSocketContext.Provider value={{ socket }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
