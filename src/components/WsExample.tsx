import React, { useContext, useEffect, useState } from "react";
import { WebSocketContext } from "../context/WebSocketContext";

const WsExample = () => {
  const { socket, setToken }: any = useContext(WebSocketContext);
  const [count, setCount] = useState(0);

  const emitMessage = (data: object) => {
    return new Promise((resolve) => {
      socket.emit("register", data);
      resolve(setCount(count + 1));
    });
  };

  useEffect(() => {
    socket.on("userLogged", (res: any) => {
      setToken(res.access_token);
      console.log(res.access_token);
    });
    socket.on("resClient", (res: any) => {
      console.log(res);
    });
  }, [setToken, socket]);

  const loginEvent = (userData: object) => {
    socket.emit("login", userData);
  };

  const getClient = () => {
    socket.emit("getClients", "Breidydl7@gmail.com");
  };

  const addCategory = () => {
    socket.emit("createCategory", {
      name: "categoria",
      iconName: "serial",
    });
  };

  return (
    <div>
      <button
        onClick={() =>
          emitMessage({
            role: "admin",
            name: "anonimo",
            password: "123456789",
            email: `Breidydl${count}@gmail.com`,
          })
        }
      >
        Add User
      </button>
      <button
        onClick={() =>
          loginEvent({
            email: "Breidydl7@gmail.com",
            password: "123456789",
          })
        }
      >
        Login
      </button>
      <button onClick={() => addCategory()}>Add Category</button>
      <button onClick={() => getClient()}>GetClients</button>
      {/* {user.map((elem: any, index: number) => {
        const { clientId, username, password } = elem;
        return (
          <div key={index} style={{ border: "1px solid red", margin: "10px" }}>
            <p>ID: {clientId}</p>
            <p>Nombre de usuario: {username}</p>
            <p>Clave: {password}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default WsExample;
