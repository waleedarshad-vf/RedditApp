import React from "react";
import { shallow } from "enzyme";
import NewsList from "./Index";
import { Provider } from "react-redux";
import store from "../../store/store.js";
describe("NewsList", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(
        <Provider store={store}>
          <NewsList />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });
  });
});
