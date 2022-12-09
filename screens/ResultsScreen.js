import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../Styles";
import { useAppContext } from "../AppContext";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../components/ListItem";

const ResultsScreen = ({ route, navigation }) => {
  const { searchResults, setCurrentItem } = useAppContext();

  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => press(item)}>
        <ListItem data={item} />
      </TouchableOpacity>
    );
  }

  function press(currentItem) {
    setCurrentItem(currentItem);
    navigation.navigate("DetailsScreen");
  }

  return (
    <View
      style={
        searchResults.length > 10
          ? styles.screenContainerNotExtended
          : styles.screenContainer
      }
    >
      <FlatList
        data={searchResults}
        ListHeaderComponent={
          <Text style={styles.title}>
            Results for {route.params?.searchTerm}
          </Text>
        }
        ListEmptyComponent={
          <Text> No results for {route.params?.searchTerm}</Text>
        }
        renderItem={renderItem}
      />
    </View>
  );
};

export default ResultsScreen;
