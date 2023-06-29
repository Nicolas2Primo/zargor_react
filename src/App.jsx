import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Navbar></Navbar>
      <Home />
    </div>
  );
}

export default App;
