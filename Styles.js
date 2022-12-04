import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 16,
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
  },
  filter: {
    width: "45%",
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
