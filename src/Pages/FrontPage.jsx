import React from "react";
import "../styles/frontpage.css";

const FrontPage = () => {
  return (
    <div className="frontpage">
      <h1 className="frontpageTitle">Pet Owner's Notebook</h1>
      <form className="inputForm">
        <input type="text" placeholder="Add pet..." className="petInput" />
        <button type="submit" className="petButton">
          New pet
        </button>
      </form>
    </div>
  );
};

export default FrontPage;
