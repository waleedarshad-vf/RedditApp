import { combineReducers } from "redux";
import { NEWS_LIST } from "../types";

const INITIAL_STATE = {
  news: [],
  loading: true
};

export const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_LIST:
      return { ...state, news: action.payload, loading: false };
    default:
      return state;
  }
};
