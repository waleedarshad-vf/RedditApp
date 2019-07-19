import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { newsReducer } from "./reducer/NewsReducer.js";

let rootReducer = combineReducers({
  news: newsReducer
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
