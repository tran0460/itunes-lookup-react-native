import { View, Text } from "react-native";
import { styles } from "../Styles";
import { useAppContext } from "../AppContext";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../components/ListItem";

const ResultsScreen = () => {
  const { searchResults } = useAppContext();
  function renderItem({ item }) {
    return <ListItem data={item} />;
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>Ben</Text>
      <FlatList data={searchResults} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default ResultsScreen;
