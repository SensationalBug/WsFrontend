import "./App.css";
// import Main from "./components/Main";
import WsExample from "./components/WsExample";
import WebSocketProvider from "./context/WebSocketContext";

function App() {
  return (
    <WebSocketProvider>
      <WsExample />
    </WebSocketProvider>
  );
  // return <Main />;
}

export default App;
