import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { styles } from "../Styles";

const FilterBox = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.filter} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterBox;
