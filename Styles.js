import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
  },
  screenContainerNotExtended: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    paddingVertical: 8,
  },
  filter: {
    width: "42.5%",
    height: 100,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  filterActive: {
    transform: [{ scale: 1.05 }],
    backgroundColor: "red",
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  listItemContent: {
    flexGrow: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    paddingVertical: 4,
    marginLeft: 12,
    width: "80%",
  },
  listItemName: {
    fontSize: 20,
    flexGrow: 2,
    marginBottom: 8,
  },
  listItemAuthor: {
    fontSize: 14,
    flexGrow: 1,
  },
});
