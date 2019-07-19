import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./styles";
import NewsList from "../../components/NewsList/Index";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <NewsList />
      </View>
    );
  }
}

export default LandingPage;
