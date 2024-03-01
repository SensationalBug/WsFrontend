import { useContext, useState } from "react";
import { WebSocketContext } from "../context/WebSocketContext";
import Cookies from "universal-cookie";

const WsExample = () => {
  const { socket, categories }: any = useContext(WebSocketContext);
  const cookies = new Cookies(null, { path: "/" });
  const [count, setCount] = useState(0);

  const emitMessage = (data: object) => {
    return new Promise((resolve) => {
      socket.emit("register", data);
      resolve(setCount(count + 1));
    });
  };

  const loginEvent = async () => {
    await socket.emit("loginIn", {
      email: "Breidydl7@gmail.com",
      password: "123456789",
    });
    socket.on("loginOut", (res: any) => {
      cookies.set("access_token", res.access_token);
      console.log(res);
    });
  };

  const getCookies = () => {
    console.log(cookies.get("access_token"));
  };

  const addCategory = () => {
    socket.emit("createCategory", {
      categoryName: "categoria",
      categoryIcon: "serial",
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
          loginEvent().then(() =>
            socket.emit(
              "getAllCategories",
              `Bearer ${cookies.get("access_token")}`
            )
          )
        }
      >
        Login
      </button>
      <button onClick={() => addCategory()}>Add Category</button>
      <button onClick={() => getCookies()}>getCookies</button>
      {categories.map((elem: any, index: number) => {
        console.log(elem);
        const { id, categoryName, categoryIcon, createdBy } = elem;
        return (
          <div key={index} style={{ border: "1px solid red", margin: "10px" }}>
            <p>ID: {id}</p>
            <p>categoryName: {categoryName}</p>
            <p>categoryIcon: {categoryIcon}</p>
            <p>createdBy: {createdBy}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WsExample;
