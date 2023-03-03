import React from "react";

import "../styles/frontpage.css";
import { useState, useEffect } from "react";

const FrontPage = () => {
  const [input, setInput] = useState("");
  const [pets, setPets] = useState([]);
  const [scene, setScene] = useState(1);

  useEffect(() => {
    const storedPets = localStorage.getItem("pets");
    if (storedPets) {
      setPets(JSON.parse(storedPets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  function getInput(event) {
    setInput(event.target.value);
  }

  function addNewPet(e) {
    e.preventDefault();
    setPets([...pets, input]);
    setInput("");
    setScene((prevValue) => prevValue + 1);
  }

  return (
    <div className="frontpage">
      <h1 className="frontpageTitle">Pet Owner's Notebook</h1>

      {/* SCENES */}
      {scene === 1 && (
        <form className="inputForm" onSubmit={addNewPet}>
          <input
            onChange={getInput}
            type="text"
            placeholder="Add pet..."
            className="petInput"
            value={input}
          />
          <button type="submit" className="petButton">
            New pet
          </button>
        </form>
      )}

      {scene === 2 && <p>Scene 2</p>}
    </div>
  );
};

export default FrontPage;
