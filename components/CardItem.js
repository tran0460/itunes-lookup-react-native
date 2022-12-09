import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useAppContext } from "../AppContext";
import { styles } from "../Styles";
import React from "react";

const CardItem = ({ data, type, navigation }) => {
  const upScaledImage400 = data.artworkUrl100.replace("100x100bb", "400x400bb");
  const upScaledImage600 = data.artworkUrl100.replace("100x100bb", "600x600bb");
  const upScaledImage800 = data.artworkUrl100.replace("100x100bb", "800x800bb");
  const { setCurrentItem } = useAppContext();
  const navigate = () => {
    setCurrentItem(data);
    navigation.navigate("DetailsScreen");
  };
  {
    switch (type) {
      case "album":
        return (
          <TouchableOpacity onPress={navigate}>
            <View style={[styles.cardContainer, styles.albumCard]}>
              <Image
                style={[styles.cardImage, styles.albumImage]}
                source={{ uri: upScaledImage400 }}
              />
              <Text lineBreakMode="tail" style={[styles.albumTitle]}>
                {data.collectionName}
              </Text>
            </View>
          </TouchableOpacity>
        );
      case "movie":
        return (
          <TouchableOpacity onPress={navigate}>
            <View style={[styles.cardContainer, styles.movieCard]}>
              <Image
                resizeMode="fill"
                style={[styles.cardImage, styles.movieImage]}
                source={{ uri: upScaledImage400 }}
              />
              <Text style={[styles.movieTitle]}>{data.trackName}</Text>
            </View>
          </TouchableOpacity>
        );
    }
  }
};

export default CardItem;
