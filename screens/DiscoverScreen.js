import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { createSearchQuery, getData } from "../api.services";
import { styles } from "../Styles";
import { useAppContext } from "../AppContext";
import FilterBox from "../components/FilterBox";
// , set data using setSearchResults in DiscoverScreen.js

const DiscoverScreen = ({ navigation }) => {
  const [currentFilter, setCurrentFilter] = useState("");

  const { searchResults, setSearchResults } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const onSearch = async () => {
    const queries = createSearchQuery({
      term: searchTerm,
      entity:
        currentFilter == "Song" ? "musicTrack" : currentFilter.toLowerCase(),
    });
    console.log(queries);
    const data = await getData(queries);
    setSearchResults(data);
    navigation.navigate("ResultsScreen");
  };
  console.log(searchResults);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <TextInput
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          style={styles.searchInput}
          placeholder="Search"
        />
        <Button
          disabled={currentFilter === ""}
          title="Search"
          onPress={() => onSearch()}
        />
      </View>
      <View style={styles.filterContainer}>
        <FilterBox
          title={"Song"}
          currentFilter={currentFilter}
          onPress={() => setCurrentFilter("Song")}
        />
        <FilterBox
          title={"Movie"}
          currentFilter={currentFilter}
          onPress={() => setCurrentFilter("Movie")}
        />
        <FilterBox
          title={"Album"}
          currentFilter={currentFilter}
          onPress={() => setCurrentFilter("Album")}
        />
        <FilterBox
          title={"Podcast"}
          currentFilter={currentFilter}
          onPress={() => setCurrentFilter("Podcast")}
        />
      </View>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
