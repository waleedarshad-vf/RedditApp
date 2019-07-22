import React from "react";
import { shallow } from "enzyme";
import NewsItem from "./index";
import { Provider } from "react-redux";
import store from "../../store/store.js";
describe("NewsItem", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(
        <Provider store={store}>
          <NewsItem />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });
  });
});
