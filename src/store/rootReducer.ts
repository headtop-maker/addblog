import { combineReducers } from "redux";
import addImagereducer from "./addImage/reducer";
import authFormReducer from "./authForm/reducer";
import regFormReducer from "./regPage/reducer";

const rootReducer = combineReducers({
  addImage: addImagereducer,
  regForm: regFormReducer,
  authForm: authFormReducer,
});

export default rootReducer;
