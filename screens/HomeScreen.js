import { Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../Styles";
import { useState, useEffect, useCallback } from "react";
import { createSearchQuery, getData } from "../api.services";
import CardItem from "../components/CardItem";
const HomeScreen = () => {
  const [albumsData, setAlbumsData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);

  const getAlbumsData = async () => {
    const queries = createSearchQuery({
      term: "top 20 2022",
      country: "ca",
      limit: "10",
      entity: "album",
    });
    const data = await getData(queries);
    setAlbumsData(data);
  };
  const getMoviesData = async () => {
    const queries = createSearchQuery({
      term: "2022",
      country: "us",
      limit: "10",
      entity: "movie",
      lang: "en_us",
    });
    const data = await getData(queries);
    setMoviesData(data);
  };

  const renderAlbumsItem = useCallback(
    ({ item }) => {
      return <CardItem data={item} type="album" />;
    },
    [albumsData]
  );
  const renderMoviesItem = useCallback(
    ({ item }) => {
      return <Text>{item.trackName}**</Text>;
    },
    [moviesData]
  );
  useEffect(() => {
    getAlbumsData();
    getMoviesData();
  }, []);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>Music Albums</Text>
      <FlatList horizontal data={albumsData} renderItem={renderAlbumsItem} />
      <Text>Movies</Text>
      <FlatList horizontal data={moviesData} renderItem={renderMoviesItem} />
    </SafeAreaView>
  );
};

export default HomeScreen;
