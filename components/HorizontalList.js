import { Text, FlatList, View } from "react-native";
import { styles } from "../Styles";
import React from "react";

const HorizontalList = ({ data, renderItem, title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        keyExtractor={({ item, index }) => Date.now() + index}
        style={styles.horizontalList}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HorizontalList;
