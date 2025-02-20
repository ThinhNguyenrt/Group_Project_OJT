import React from "react";
import Svg, { Rect } from "react-native-svg";

const DottedSquare = () => {
  return (
    <Svg width="70" height="70">
      <Rect x="10" y="10" width="50" height="50" fill="lightyellow" stroke="purple" strokeWidth="1" strokeDasharray="3 3" />
    </Svg>
  );
};

export default DottedSquare;