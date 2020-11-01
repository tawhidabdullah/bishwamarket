import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import * as reducers from "./ducks";
import { apiService } from "./middlewares";

const rootReducer = combineReducers(reducers);
const middlewares = [apiService, thunk];

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const persistConfig = {
  key: "shop",
  storage: storage,
  whitelist: ["lingual", "cart", "session"], // session removed from array
};

const pReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
  return createStore(
    pReducer,
    initialState,
    compose(applyMiddleware(...middlewares), devTools)
  );
}

const store = configureStore({});

const persistor = persistStore(store);

export { persistor, store };
