import { View, Text, Image } from "react-native";
import React from "react";
import { useAppContext } from "../AppContext";
import { styles } from "../Styles";
import * as Linking from "expo-linking";

const DetailsScreen = () => {
  const { currentItem } = useAppContext();
  console.log(currentItem);

  return (
    <View style={styles.detailscontainer}>
      <Image
        style={styles.carddetails}
        source={{ uri: currentItem.artworkUrl60 }}
      />
      <Text style={styles.textdetails}>{currentItem.artistName}</Text>
      <Text>{currentItem.collectionCensoredName}</Text>
      <Text onPress={() => Linking.openURL(currentItem.previewUrl)}>
        Music Preview
      </Text>
      <Text onPress={() => Linking.openURL("music://app?")}>Music.....</Text>
    </View>
  );
};
//app?saddr=Cupertino&S100.123+101.222

export default DetailsScreen;
