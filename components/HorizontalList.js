import { Text, FlatList, View, StyleSheet } from "react-native";
import React from "react";

const HorizontalList = ({ data, renderItem, title }) => {
  return (
    <View>
      <Text style={styles.listTitle}>{title}</Text>
      <FlatList
        horizontal
        style={styles.horizontalList}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalList: {
    overflow: "visible",
  },
  listTitle: {
    fontSize: 24,
    marginBottom: 12,
  },
});

export default HorizontalList;
