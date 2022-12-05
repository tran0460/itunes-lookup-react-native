import { View, Text } from "react-native";
import { styles } from "../Styles";
import { useAppContext } from "../AppContext";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../components/ListItem";

const ResultsScreen = ({ route }) => {
  const { searchResults } = useAppContext();
  function renderItem({ item }) {
    return <ListItem data={item} />;
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text> Results for {route.params?.searchTerm}</Text>
      <FlatList
        data={searchResults}
        ListEmptyComponent={
          <Text> No results for {route.params?.searchTerm}</Text>
        }
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default ResultsScreen;
