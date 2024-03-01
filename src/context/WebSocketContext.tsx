import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";
import Cookies from "universal-cookie";

interface webSocketProps {
  children: JSX.Element;
}

export const WebSocketContext = createContext({});

const WebSocketProvider = ({ children }: webSocketProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cookies = new Cookies(null, { path: "/" });
  const [categories, setCategories] = useState([]);
  const socket = io("http://localhost:3001", {
    extraHeaders: {
      authorization: `Bearer ${cookies.get("access_token")}`,
    },
  });

  useEffect(() => {
    socket.on("loginOut", (res: any) => {
      cookies.set("access_token", res.access_token);
      console.log(res);
    });
    socket.emit("getAllCategories", `Bearer ${cookies.get("access_token")}`);
    socket.on("userCats", (res: any) => {
      setCategories(res);
    });
  }, [cookies, socket]);

  return (
    <WebSocketContext.Provider value={{ socket, categories }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
