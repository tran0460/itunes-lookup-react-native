import {
  View,
  Text,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppContext } from "../AppContext";
import { styles } from "../Styles";
import * as Linking from "expo-linking";

const DetailsScreen = () => {
  const { currentItem } = useAppContext();
  console.log(currentItem);

  const createAppName = () => {
    if (currentItem.kind === "podcast") return "Podcasts";
    if (currentItem.kind === "feature-movie") return "Itunes Movies";
    return "Apple Music";
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.detailsContent}>
        <Image
          style={styles.carddetails}
          source={{ uri: currentItem.artworkUrl60 }}
        />

        <Text style={styles.textdetails}>{currentItem.artistName}</Text>

        <Text style={styles.textdetails}>
          {currentItem.collectionType === "Album"
            ? currentItem.collectionName
            : currentItem.trackName}
        </Text>

        <Text>${currentItem.collectionPrice}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.preview, styles.shadow]}
          onPress={() => Linking.openURL(currentItem.previewUrl)}
        >
          <Text style={styles.buttonText}> Open preview in browser </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.preview}
          onPress={() => {
            if (Platform.OS === "android")
              return Alert.alert("Not supported on Android");
            if (currentItem.kind === "podcast")
              return Linking.openURL(
                `podcast${currentItem.feedUrl.replace("https", "")}`
              );
            if (currentItem.kind === "feature-movie")
              return Linking.openURL(currentItem.trackViewUrl);
            return Linking.openURL(
              `music${currentItem.trackViewUrl.replace("https", "")}`
            );
          }}
        >
          <Text style={styles.buttonText}>Open in {createAppName()} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
