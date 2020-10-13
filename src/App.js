import React from "react";
import "./app.css"
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      {/*Sidebar*/}
      <Sidebar />
      <Chat/>
    </div>
  );
}

export default App;
