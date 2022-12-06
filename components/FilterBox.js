import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { styles } from "../Styles";

const FilterBox = ({ title, onPress, currentFilter }) => {
  return (
    <TouchableOpacity
      style={[
        styles.filter,
        currentFilter === title ? styles.filterActive : null,
      ]}
      onPress={onPress}>
      <Text style={styles.filterBoxText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterBox;
