import React from "react";
import Svg, { Rect, Circle } from "react-native-svg";

const SquareWithCircles = () => {
  return (
    <Svg width="70" height="70">
      <Rect x="10" y="10" width="50" height="50" fill="lightgray" stroke="black" strokeWidth="2" strokeDasharray="5 5" />
      <Circle cx="10" cy="10" r="5" fill="lightgreen" stroke="black" />
      <Circle cx="60" cy="10" r="5" fill="lightgreen" stroke="black" />
      <Circle cx="10" cy="60" r="5" fill="lightgreen" stroke="black" />
      <Circle cx="60" cy="60" r="5" fill="lightgreen" stroke="black" />
    </Svg>
  );
};

export default SquareWithCircles;