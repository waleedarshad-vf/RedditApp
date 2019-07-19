import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./app/views/LandingPage";
import { Provider } from "react-redux";
import store from "./app/store/store.js";
export default function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
