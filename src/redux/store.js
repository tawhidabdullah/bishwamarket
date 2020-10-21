import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

let devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), devTools)
);

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
