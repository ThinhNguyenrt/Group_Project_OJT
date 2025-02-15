import React from "react";
import { View, StyleSheet } from "react-native";
import ImageSelectionList from "./ImageSelectionList";
import PromptInput from "./PromptInput";

/*const images = [
  //require("./assets/image1.png"),
  require("./assets/image2.png"),
  require("./assets/image3.png"),
  require("./assets/image4.png"),
];*/

const AIInputBox = () => {
  return (
    <View style={styles.container}>
      <ImageSelectionList images={images} />
      <PromptInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#d3bdf4",
    borderRadius: 10,
  },
});

export default AIInputBox;
