import { View, Text } from "react-native";
import { styles } from "../Styles";
import { useAppContext } from "../AppContext";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const ResultsScreen = () => {
  const { searchResults } = useAppContext();
  function renderItem({ item }) {
    return <Text>{item.trackName}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList data={searchResults} renderItem={renderItem} />
      <Text>ResultsScreen</Text>
    </SafeAreaView>
  );
};

export default ResultsScreen;
