import { View, Text } from "react-native";
import { styles } from "../Styles";
import { useAppContext } from "../AppContext";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../components/ListItem";

const ResultsScreen = ({ route }) => {
  const { searchResults } = useAppContext();
  function renderItem({ item }) {
    return <ListItem data={item} />;
  }

  return (
    <View style={styles.screenContainer}>
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
