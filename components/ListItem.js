import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../Styles";

const ListItem = ({ data }) => {
  const upScaledImage400 = data.artworkUrl100.replace("100x100bb", "400x400bb");
  return (
    <View style={styles.listItemContainer}>
      <Image
        source={{ uri: upScaledImage400 }}
        style={{ width: 60, height: 60 }}
      />
      <View style={styles.listItemContent}>
        <Text numberOfLines={2} style={styles.listItemName}>
          {data.trackName}
        </Text>
        <Text numberOfLines={1} style={styles.listItemAuthor}>
          {data.artistName}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;
