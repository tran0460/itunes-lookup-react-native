import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../Styles";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
