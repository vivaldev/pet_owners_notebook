import { combineReducers, createStore } from "redux";
import catReducer from "./catReducer";

const rootReducer = combineReducers({
  cat: catReducer,
});

const store = createStore(rootReducer);

export default store;
