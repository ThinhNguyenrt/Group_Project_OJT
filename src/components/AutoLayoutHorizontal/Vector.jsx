import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import Svg, { Path } from "react-native-svg";
import arrow from  '../../../assets/image/vector/arrow.png'

const Vector = () => {

  return (
    <View style={styles.container}>
      <Image source={arrow} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50, 
    height: 50,
    resizeMode: "contain",
  },
});

export default Vector;