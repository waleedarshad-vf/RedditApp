import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./app/views/LandingPage";

export default function App() {
  return <LandingPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
