import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../Styles";
import { useState, useEffect } from "react";
import { createSearchQuery, getData } from "../api.services";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => {
          const queries = createSearchQuery({
            term: "imagine dragons",
            country: "ca",
            limit: "1",
          });
          getData(queries);
        }}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
