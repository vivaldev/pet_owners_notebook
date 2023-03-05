import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Pages/Hero";
import FrontPage from "./Pages/FrontPage";
import CatForm from "./Pages/CatForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/cat" element={<CatForm />} />
      </Routes>
    </Router>
  );
}

export default App;
