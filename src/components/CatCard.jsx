import React from "react";
import { connect } from "react-redux";
import "../styles/forms.css";
import Header from "./Header";

const CatCard = (props) => {
  return (
    <div className="container">
      <Header />
      <div className="card">
        {props.imageChecked && (
          <img src="https://placekitten.com/200/300" alt="cat" />
        )}
        <div className="card-body">
          <h5 className="card-title">Fluffy</h5>
          {props.ageChecked && <p>Age: 2 years old</p>}
          {props.vaccinationChecked && <p>Vaccination status: Up to date</p>}
          {props.bioChecked && (
            <p>
              Fluffy is a lovable cat who enjoys long naps and chasing laser
              pointers.
            </p>
          )}
        </div>
      </div>
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

export default connect(mapStateToProps)(CatCard);
