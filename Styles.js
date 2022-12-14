import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
  },
  discoveryScreenContainer: {
    flex: 1,
  },
  screenContainerNotExtended: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexGrow: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    paddingVertical: 8,
  },
  filter: {
    width: "42.5%",
    height: 100,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  filterBoxText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "semibold",
  },
  filterActive: {
    transform: [{ scale: 1.075 }],
    backgroundColor: "rgba(22, 22, 22, 0.4)",
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
    fontSize: 17,
    flexGrow: 2,
    marginBottom: 8,
  },
  listItemAuthor: {
    fontSize: 14,
    flexGrow: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "column",
    marginRight: 20,
    marginBottom: 16,
  },
  albumCard: {
    width: 150,
    height: 210,
  },
  movieCard: {
    width: 200,
    height: 340,
  },
  cardImage: {
    width: "100%",
    borderRadius: 4,
    marginBottom: 12,
  },
  albumImage: {
    height: 150,
  },
  movieImage: {
    height: 300,
  },
  albumTitle: {
    fontSize: 12,
  },
  movieTitle: {
    fontSize: 17,
  },
  horizontalList: {
    overflow: "visible",
  },
  carddetails: {
    width: "40%",
    height: 200,
    marginBottom: 15,
  },
  detailscontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  cardTitle: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: "center",
  },
  cardArtist: {
    marginBottom: 10,
    fontSize: 17.5,
    color: "#4d4d4d",
    textAlign: "center",
  },
  cardPrice: {
    fontSize: 14,
  },
  preview: {
    borderRadius: 8, // border-radius: 8
    backgroundColor: "#FF2D55",
    margin: 12,
    padding: 12,
    width: "70%",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#4D4D4D", // color: #4D4D4D
    shadowOffset: {
      // no offset x, y
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25, // opacity: 0.15
    shadowRadius: 4, // radius: 24
    elevation: 5, // elevation: 5
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContent: {
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
  },
});
