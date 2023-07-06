import React from "react";
import Navbar from "./components/components_home/Navbar";
import Home from "./pages/Home";
import Dragonfruit from "./pages/Dragonfruit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragonfruit" element={<Dragonfruit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
