import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";

import styles from "./styles";
import NewsList from "../../components/NewsList/Index";
import LottieLoader from "react-native-lottie-loader";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <LottieLoader visible={loading} />
        <NewsList />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { loading } = state.news;
  return { loading };
};

export default connect(
  mapStateToProps,
  {}
)(LandingPage);
