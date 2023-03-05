import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import "../styles/forms.css";
import Header from "../components/Header";

const CatForm = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    props.toggleCheckbox(event.target.value);
  };

  return (
    <div className="container">
      {submitted ? (
        <CatCard />
      ) : (
        <>
          <Header />
          <h2>
            What information you would like to be displayed <br /> in your new
            <span className="petCardEmphasis"> Pet Card</span>?
          </h2>
          <form onSubmit={() => setSubmitted(true)} className="catForm">
            <div className="form-group">
              <label htmlFor="image">Include image?</label>
              <input
                type="checkbox"
                id="image"
                name="image"
                value="imageChecked"
                checked={props.imageChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Include age?</label>
              <input
                type="checkbox"
                id="age"
                name="age"
                value="ageChecked"
                checked={props.ageChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vaccination">Include vaccination?</label>
              <input
                type="checkbox"
                id="vaccination"
                name="vaccination"
                value="vaccinationChecked"
                checked={props.vaccinationChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Include bio?</label>
              <input
                type="checkbox"
                id="bio"
                name="bio"
                value="bioChecked"
                checked={props.bioChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <button type="submit">Create Pet Card</button>
          </form>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageChecked: state.imageChecked,
    ageChecked: state.ageChecked,
    vaccinationChecked: state.vaccinationChecked,
    bioChecked: state.bioChecked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCheckbox: (value) =>
      dispatch({ type: "TOGGLE_CHECKBOX", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatForm);
