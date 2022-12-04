import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const CardItem = ({ data, type }) => {
  const upScaledImage400 = data.artworkUrl100.replace("100x100bb", "400x400bb");
  const upScaledImage600 = data.artworkUrl100.replace("100x100bb", "600x600bb");
  const upScaledImage800 = data.artworkUrl100.replace("100x100bb", "800x800bb");
  switch (type) {
    case "album":
      return (
        <View style={[styles.cardContainer, styles.albumCard]}>
          <Image
            style={[styles.cardImage, styles.albumImage]}
            source={{ uri: upScaledImage400 }}
          />
          <Text
            lineBreakMode="tail"
            style={[styles.cardTitle, styles.albumTitle]}>
            {data.collectionName}
          </Text>
        </View>
      );
    case "movie":
      return (
        <View style={[styles.cardContainer, styles.movieCard]}>
          <Image
            resizeMode="fill"
            style={[styles.cardImage, styles.movieImage]}
            source={{ uri: upScaledImage400 }}
          />
          <Text style={[styles.cardTitle, styles.movieTitle]}>
            {data.trackName}
          </Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
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
  cardTitle: {
    flex: 1,
    flexWrap: "wrap",
  },
  albumTitle: {
    fontSize: 12,
  },
  movieTitle: {
    fontSize: 17,
  },
});

export default CardItem;
