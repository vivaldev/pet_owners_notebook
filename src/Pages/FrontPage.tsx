import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/frontpage.css";
import { useState, useEffect } from "react";

const FrontPage = () => {
  const [input, setInput] = useState<string>("");
  const [pets, setPets] = useState<string[]>([]);
  const [scene, setScene] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false); // new state for loading indicator

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

    setIsLoading(true); // show loading indicator
    setTimeout(() => {
      // simulate API call with setTimeout
      setPets((prevPets: string[]) => [...prevPets, input]);
      setQuestions((prevQuestions: { question: string; answer: string }[]) => [
        ...prevQuestions,
        { question: `What animal ${input} is?`, answer: "" },
      ]);

      setInput("");
      setScene((prevValue: number) => prevValue + 1);
      setIsLoading(false); // hide loading indicator
    }, 1000); // wait for 1 second before updating state
  }

  return (
    <div className="frontpage">
      <Header />

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
          {isLoading && <p>Loading...</p>} {/* show loading indicator */}
        </form>
      )}

      {scene === 2 && (
        <div className="quiz">
          <div className="firstQuestion">
            <h3 className="question">
              What animal <span className="petName">{pets[0]}</span> is?
            </h3>
            <div className="options">
              <Link className="optionBtn" to="/cat">
                Cat
              </Link>
              <Link className="optionBtn" to="/dog">
                Dog
              </Link>
              <Link className="optionBtn" to="/horse">
                Horse
              </Link>
              <Link className="optionBtn" to="/sheep">
                Sheep
              </Link>
              <Link className="optionBtn" to="/chicken">
                Chicken
              </Link>
              <Link className="optionBtn" to="/rabbit">
                Rabbit
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontPage;
