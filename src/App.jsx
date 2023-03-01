import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [titleOneVisible, setTitleOneVisible] = useState(false);
  const [titleTwoVisible, setTitleTwoVisible] = useState(false);
  const [titleThreeVisible, setTitleThreeVisible] = useState(false);

  useEffect(() => {
    const intervalIdOne = setInterval(() => {
      setTitleOneVisible(true);
    }, 500);

    const intervalIdTwo = setInterval(() => {
      setTitleTwoVisible(true);
    }, 1500);

    const intervalIdThree = setInterval(() => {
      setTitleThreeVisible(true);
    }, 2000);

    return () => {
      clearInterval(intervalIdOne);
      clearInterval(intervalIdTwo);
      clearInterval(intervalIdThree);
    };
  }, []);

  return (
    <div className="App">
      <h1 className="title">
        <span className={`word ${titleOneVisible ? "show" : ""} `}>
          Welcome
        </span>
        <span className={`word ${titleTwoVisible ? "show" : ""}`}>to the</span>
        <span
          className={`word ${
            titleThreeVisible ? "show" : ""
          } petOwnersNotebook`}
        >
          Pet Owner's Notebook
        </span>
      </h1>
    </div>
  );
}

export default App;
