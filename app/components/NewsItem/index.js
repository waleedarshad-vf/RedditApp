import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import moment from "moment";
class NewsItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  timeAgo(datetime) {
    var d = moment.duration(datetime, "milliseconds");
    return moment(d.asMinutes(), "mm").format("mm");
  }

  render() {
    const { newsItem } = this.props;
    const { data } = newsItem;
    return (
      <TouchableOpacity
        onPress={this._onPress}
        key={data.id}
        style={styles.itemRow}
      >
        <Image source={{ uri: data.thumbnail }} style={styles.thumbnail} />

        <View style={styles.itemImg} key={data.id}>
          <Text style={styles.date}>
            {this.timeAgo(data.created)} minute ago
          </Text>
          <Text style={styles.title} numberOfLines={2}>
            {data.title}
          </Text>

          <View style={styles.subReddit}>
            <Text style={styles.author}>
              {" "}
              <Image
                source={require("../../../assets/pencil.png")}
                style={{ width: 15, height: 15, paddingRight: 10 }}
              />
              {data.author}
            </Text>
            <Text>
              {" "}
              <Image
                source={require("../../../assets/like.png")}
                style={{ width: 15, height: 15, paddingRight: 10 }}
              />
              {data.score}
            </Text>
            <Text>
              <Image
                source={require("../../../assets/comment.png")}
                style={{ width: 15, height: 15, paddingRight: 10 }}
              />
              {data.num_comments}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsItem;
