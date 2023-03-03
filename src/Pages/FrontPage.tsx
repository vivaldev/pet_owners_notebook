import React from "react";

import "../styles/frontpage.css";
import { useState, useEffect } from "react";

const FrontPage = () => {
  const [input, setInput] = useState<string>("");
  const [pets, setPets] = useState<string[]>([]);
  const [scene, setScene] = useState<number>(1);

  const [questions, setQuestions] = useState<
    { question: string; answer: string }[]
  >([]);

  useEffect(() => {
    const storedPets = localStorage.getItem("pets");
    if (storedPets) {
      setPets(JSON.parse(storedPets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  function getInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value);
  }

  const newQustions = [];

  function addNewPet(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    setPets((prevPets: string[]) => [...prevPets, input]);
    setQuestions((prevQuestions: { question: string; answer: string }[]) => [
      ...prevQuestions,
      { question: `What animal ${input} is?`, answer: "" },
    ]);

    setInput("");
    setScene((prevValue: number) => prevValue + 1);
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

      {scene === 2 && (
        <div className="quiz">
          <div className="firstQuestion">
            <h3>What animal {pets[0]} is?</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontPage;
