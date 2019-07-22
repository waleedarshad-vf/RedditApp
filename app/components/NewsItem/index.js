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

  validUrl(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
      return false;
    } else {
      return true;
    }
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
        {this.validUrl(data.thumbnail) ? (
          <Image source={{ uri: data.thumbnail }} style={styles.thumbnail} />
        ) : (
          <Image
            source={require("../../../assets/post.png")}
            style={styles.thumbnail}
          />
        )}

        <View style={styles.itemImg} key={data.id}>
          <Text style={styles.date}>
            {this.timeAgo(data.created)} minute ago
          </Text>
          <Text style={styles.title} numberOfLines={1}>
            {data.title}
          </Text>

          <View style={styles.subReddit}>
            <View>
              <Image
                source={require("../../../assets/pencil.png")}
                style={{
                  width: 15,
                  height: 15,
                  paddingRight: 10,
                  alignSelf: "flex-start"
                  // alignSelf: "center"
                }}
              />
              <Text style={styles.author}>{data.author}</Text>
            </View>

            <View>
              <Image
                source={require("../../../assets/like.png")}
                style={{
                  width: 15,
                  height: 15,
                  paddingRight: 10,
                  alignSelf: "center"
                }}
              />
              <Text>{data.score}</Text>
            </View>
            <View>
              <Image
                source={require("../../../assets/comment.png")}
                style={{
                  width: 15,
                  height: 15,
                  paddingRight: 10,
                  alignSelf: "center"
                }}
              />
              <Text>{data.num_comments}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsItem;
