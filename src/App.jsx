import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Pages/Hero";
import FrontPage from "./Pages/FrontPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="frontpage" element={<FrontPage />} />
      </Routes>
    </Router>
  );
}

export default App;
