import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { createSearchQuery, getData } from "../api.services";
import { styles } from "../Styles";
import { useAppContext } from "../AppContext";
import FilterBox from "../components/FilterBox";
// , set data using setSearchResults in DiscoverScreen.js

const SearchScreen = () => {
  const [currentFilter, setCurrentFilter] = useState("");

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
        <FilterBox
          title={"Songs"}
          currentFilter={currentFilter}
          onPress={() => setCurrentFilter("Songs")}
        />
        <FilterBox
          title={"Movies"}
          currentFilter={currentFilter}
          onPress={() => setCurrentFilter("Movies")}
        />
        <FilterBox
          title={"Albums"}
          currentFilter={currentFilter}
          onPress={() => setCurrentFilter("Albums")}
        />
        <FilterBox
          title={"Podcasts"}
          currentFilter={currentFilter}
          onPress={() => setCurrentFilter("Podcasts")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
