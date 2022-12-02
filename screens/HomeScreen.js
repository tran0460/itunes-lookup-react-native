import { Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../Styles";
import { useState, useEffect, useCallback } from "react";
import { createSearchQuery, getData } from "../api.services";
const HomeScreen = () => {
  const [albumsData, setAlbumsData] = useState([]);

  const getAlbumsData = async () => {
    const queries = createSearchQuery({
      term: "top 40 2022",
      country: "ca",
      limit: "10",
      entity: "album",
    });
    const data = await getData(queries);
    setAlbumsData(data);
  };

  const renderItem = useCallback(
    ({ item }) => {
      return <Text>{item.collectionName}</Text>;
    },
    [albumsData]
  );
  useEffect(() => {
    getAlbumsData();
  }, []);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>Albums</Text>
      <FlatList horizontal data={albumsData} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default HomeScreen;
