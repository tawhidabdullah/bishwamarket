// import lib
import { combineReducers } from "redux";

// import reducers
import GlobalReducer from "./global/global.reducer";

const rootReducer = combineReducers({
  globals: GlobalReducer,
});

export default rootReducer;
