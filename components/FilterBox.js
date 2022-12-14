import { TouchableOpacity, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "../Styles";

const FilterBox = ({ title, onPress, currentFilter, url }) => {
  return (
    <TouchableOpacity
      style={[
        styles.filter,
        currentFilter === title ? styles.filterActive : null,
      ]}
      onPress={onPress}>
      <ImageBackground
        source={url}
        style={{
          height: "100%",
          width: "100%",
          opacity: 0.6,
          position: "absolute",
        }}
      />
      <Text style={styles.filterBoxText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterBox;
