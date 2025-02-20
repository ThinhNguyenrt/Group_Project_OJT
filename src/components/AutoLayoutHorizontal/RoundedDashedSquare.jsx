import React from "react";
import Svg, { Rect } from "react-native-svg";

const RoundedDashedSquare = () => {
  return (
    <Svg width="70" height="70">
      <Rect x="10" y="10" width="50" height="50" fill="lightgray" stroke="black" strokeWidth="2" strokeDasharray="10 5" rx="10" ry="10" />
    </Svg>
  );
};

export default RoundedDashedSquare;