import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { createSearchQuery, getData } from "../api.services";
import { styles } from "../Styles";
import { useAppContext } from "../AppContext";
// , set data using setSearchResults in DiscoverScreen.js

const SearchScreen = () => {
  const { searchResults, setSearchResults } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const onSearch = async () => {
    const queries = createSearchQuery({ term: searchTerm });
    const data = await getData(queries);
    setSearchResults(data);
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <TextInput
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          style={styles.searchInput}
          placeholder="Search"
        />
        <Button title="Search" onPress={() => onSearch()} />
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filter} onPress={onSearch}>
          <Text>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter} onPress={onSearch}>
          <Text>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter} onPress={onSearch}>
          <Text>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter} onPress={onSearch}>
          <Text>Songs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
