import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../Styles";

const ListItem = ({ data }) => {
  const upScaledImage400 = data.artworkUrl100.replace("100x100bb", "400x400bb");
  console.log(data);
  return (
    <View style={styles.listItemContainer}>
      <Image
        source={{ uri: upScaledImage400 }}
        style={{ width: 75, height: 75 }}
      />
      <View>
        <Text>{data.trackName}</Text>
        <Text>{data.artistName}</Text>
      </View>
    </View>
  );
};

export default ListItem;
