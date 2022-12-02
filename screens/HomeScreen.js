import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../Styles";
import { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
const HomeScreen = () => {
  const { createSearchQuery } = useAppContext();
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
