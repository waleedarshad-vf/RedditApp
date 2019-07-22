import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemRow: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
    padding: 10
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  itemImg: {
    flex: 1,
    flexDirection: "column"
  },
  subReddit: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    alignItems: "stretch",
    justifyContent: "space-between"
  },
  title: {
    padding: 10,
    fontWeight: "bold"
  },
  date: {
    fontSize: 8,
    alignSelf: "flex-end"
  }
});

export default styles;
