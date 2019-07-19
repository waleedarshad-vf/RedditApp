import { combineReducers } from "redux";
import { NEWS_LIST } from "../types";

const INITIAL_STATE = {
  news: []
};

export const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_LIST:
      return { ...state, news: action.payload };
    default:
      return state;
  }
};
