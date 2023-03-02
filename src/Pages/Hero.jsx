import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  const [titleOne, setTitleOne] = useState("");
  const [titleTwo, setTitleTwo] = useState("");
  const [startBtn, setStartBtn] = useState();
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  const [isVisibleFour, setIsVisibleFour] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTitleOne("Welcome to");
      setIsVisibleOne(true);
    }, 1000);

    setTimeout(() => {
      setTitleTwo("Pet Owner's Notebook");
      setIsVisibleTwo(true);
    }, 2000);

    setTimeout(() => {
      setIsVisibleThree(true);
    }, 3500);
  }, []);

  return (
    <div className="App">
      <h1 className="welcomeTitles">
        <span className={`titleOne ${isVisibleOne ? "show" : ""}`}>
          {titleOne}
        </span>
        <span className={`titleTwo ${isVisibleTwo ? "show" : ""}`}>
          {titleTwo}
        </span>
      </h1>
      {isVisibleThree && (
        <Link to="frontpage" className="startBtn">
          Start
        </Link>
      )}
    </div>
  );
}
