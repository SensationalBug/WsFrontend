import React, { useContext, useEffect, useState } from "react";
import { WebSocketContext } from "../context/WebSocketContext";

const WsExample = () => {
  const { socket }: any = useContext(WebSocketContext);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const emitMessage = (data: object) => {
    return new Promise((resolve) => {
      socket.emit("register", data);
      resolve(setCount(count + 1));
    });
  };

  useEffect(() => {
    socket.on("getClients", (data: []) => setUsers(data));
    socket.on("leer", (data: any) => {
      console.log(`ON ${data}`);
    });
  }, [socket]);

  const getTry = () => {
    socket.emit("leer");
  };

  return (
    <div>
      <button
        onClick={() =>
          emitMessage({
            username: `customUser${count}`,
            password: "123456789",
          })
        }
      >
        Add User
      </button>
      <button onClick={() => getTry()}>Probar</button>
      {users.map((elem: any, index: number) => {
        const { clientId, username, password } = elem;
        return (
          <div key={index} style={{ border: "1px solid red", margin: "10px" }}>
            <p>ID: {clientId}</p>
            <p>Nombre de usuario: {username}</p>
            <p>Clave: {password}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WsExample;
