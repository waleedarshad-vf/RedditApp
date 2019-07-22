import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./styles";
import NewsList from "../../components/NewsList/Index";
import AnimatedLoader from "react-native-animated-loader";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        {loading ? (
          <AnimatedLoader
            visible={visible}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("./loader.json")}
            animationStyle={styles.lottie}
            speed={1}
          />
        ) : (
          <NewsList />
        )}
      </View>
    );
  }
}

export default LandingPage;
