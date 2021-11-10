import { combineReducers } from "redux";

import contractReducer from "./contract";

const rootReducer = combineReducers({
  contractReducer,
});

export default rootReducer;
