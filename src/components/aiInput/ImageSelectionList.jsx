import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ImageOption from "./ImageOption";

const ImageSelectionList = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <View style={styles.container}>
      {images.map((img, index) => (
        <ImageOption
          key={index}
          source={img}
          selected={selectedIndex === index}
          onPress={() => setSelectedIndex(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default ImageSelectionList;