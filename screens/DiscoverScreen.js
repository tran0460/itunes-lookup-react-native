import { View, Text, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../Styles";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search" />
      <Button
        title="Search"
        onPress={() => console.log("Search button pressed")}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
