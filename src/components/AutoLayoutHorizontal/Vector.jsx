import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const Vector = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Svg width="50" height="50" viewBox="0 0 50 50">
        <Path
          d="M10 10 L40 25 L10 40 Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
};

export default Vector;