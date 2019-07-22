import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import NewsItem from "../NewsItem";
import { getList } from "../../store/actions/NewsAction";
class NewsList extends Component {
  state = { selected: (new Map(): Map<string, boolean>) };

  _keyExtractor = (item, index) => item.data.id;

  _onPressItem = (id: string) => {
    this.setState(state => {
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id));
      return { selected };
    });
  };

  _renderItem = ({ item }) => (
    <NewsItem
      key={item.data.id}
      id={item.data.id}
      newsItem={item}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  componentWillMount() {
    this.props.getList();
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  }

  render() {
    const { news } = this.props;
    return (
      <View style={styles.list}>
        <FlatList
          data={news.news}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { news } = state;
  return { news };
};

export default connect(
  mapStateToProps,
  { getList }
)(NewsList);
