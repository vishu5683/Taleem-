import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};

const loggerMiddleware = createLogger();

// Middleware setup
const middleware = [thunk, loggerMiddleware];
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);
const store = createStore(rootReducer,
  // persistedReducer,
  applyMiddleware(...middleware));
// const persistor = persistStore(store);

export { store
  // , persistor 
};
