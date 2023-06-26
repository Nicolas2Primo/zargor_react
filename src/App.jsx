import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-screen h-full">
      <Navbar></Navbar>
      <Home />
    </div>
  );
}

export default App;
