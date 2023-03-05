const initialState = {
  imageChecked: false,
  ageChecked: false,
  vaccinationChecked: false,
  bioChecked: false,
};

document.getElementById("root");
const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      return { ...state, [action.payload]: !state[action.payload] };
    default:
      return state;
  }
};

export default catReducer;
