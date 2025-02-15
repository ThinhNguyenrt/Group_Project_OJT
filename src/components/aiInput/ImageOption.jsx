import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ImageOption = ({ source, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.imageContainer, selected && styles.selected]}
      onPress={onPress}
    >
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 5,
    borderRadius: 10,
    padding: 5,
  },
  selected: {
    borderWidth: 2,
    borderColor: "blue",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default ImageOption;
