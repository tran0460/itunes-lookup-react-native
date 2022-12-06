import { Text, ScrollView, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../Styles";
import { useState, useEffect, useCallback } from "react";
import { createSearchQuery, getData } from "../api.services";
import CardItem from "../components/CardItem";
import HorizontalList from "../components/HorizontalList";
import ListItem from "../components/ListItem";
const HomeScreen = () => {
  const [albumsData, setAlbumsData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [songsData, setSongsData] = useState([]);

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
  const getSongsData = async () => {
    const queries = createSearchQuery({
      term: "Great",
      limit: "10",
      country: "ca",
      lang: "en_us",
      entity: "song",
    });
    const data = await getData(queries);
    setSongsData(data);
  };

  const renderAlbumsItem = useCallback(
    ({ item }) => {
      return <CardItem data={item} type="album" />;
    },
    [albumsData]
  );
  const renderMoviesItem = useCallback(
    ({ item }) => {
      return <CardItem data={item} type="movie" />;
    },
    [moviesData]
  );
  const renderSongsItem = useCallback(
    ({ item }) => {
      return <ListItem data={item} key={item.trackName} />;
    },
    [songsData]
  );

  useEffect(() => {
    getAlbumsData();
    getMoviesData();
    getSongsData();
  }, []);
  return (
    <ScrollView style={styles.screenContainer}>
      <SafeAreaView>
        <HorizontalList
          data={albumsData}
          renderItem={renderAlbumsItem}
          title="Albums"
        />
        <HorizontalList
          data={moviesData}
          renderItem={renderMoviesItem}
          title="Movies"
        />
        <Text style={styles.title}>Songs</Text>
        {songsData.map((item) => renderSongsItem({ item }))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
