import axios from "axios";
import store from "../store";
import { Config } from "../../config/index";
import { NEWS_LIST } from "../types";

export function getList() {
  return dispatch => {
    let url = `${Config.API_URL}/r/pics/hot.json`;
    axios
      .get(url)
      .then(function(response) {
        store.dispatch({
          type: NEWS_LIST,
          payload: data
        });
      })
      .catch(function(error) {});
  };
}
