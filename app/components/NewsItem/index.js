import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class NewsItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={{ height: 150 }}>
          <Text style={{ color: textColor }}>
            {this.props.newsItem.data.id}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsItem;
