import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "../Styles";
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
          <Text lineBreakMode="tail" style={[styles.albumTitle]}>
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
          <Text style={[styles.movieTitle]}>{data.trackName}</Text>
        </View>
      );
  }
};

export default CardItem;
