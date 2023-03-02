import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [welcome, setWelcome] = useState("Hejssan");

  return (
    <div className="App">
      <h1>{welcome}</h1>
    </div>
  );
}

export default App;
