import React, { useState } from "react";
import { View, PanResponder } from "react-native";
import Svg, { Rect, Circle } from "react-native-svg";

const SquareWithCircles = () => {
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [size, setSize] = useState({ width: 50, height: 50 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeCorner, setResizeCorner] = useState(null);
  const [cursor, setCursor] = useState("default");

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      const { locationX, locationY } = evt.nativeEvent;
      const rightEdge = position.x + size.width;
      const bottomEdge = position.y + size.height;
      const leftEdge = position.x;
      const topEdge = position.y;
      
      if (locationX > rightEdge - 15 && locationY > bottomEdge - 15) {
        setIsResizing(true);
        setResizeCorner("bottom-right");
        setCursor("nwse-resize");
      } else if (locationX < leftEdge + 15 && locationY > bottomEdge - 15) {
        setIsResizing(true);
        setResizeCorner("bottom-left");
        setCursor("nesw-resize");
      } else if (locationX > rightEdge - 15 && locationY < topEdge + 15) {
        setIsResizing(true);
        setResizeCorner("top-right");
        setCursor("nesw-resize");
      } else if (locationX < leftEdge + 15 && locationY < topEdge + 15) {
        setIsResizing(true);
        setResizeCorner("top-left");
        setCursor("nwse-resize");
      } else if (locationX > rightEdge - 15) {
        setIsResizing(true);
        setResizeCorner("right");
        setCursor("ew-resize");
      } else if (locationX < leftEdge + 15) {
        setIsResizing(true);
        setResizeCorner("left");
        setCursor("ew-resize");
      } else if (locationY > bottomEdge - 15) {
        setIsResizing(true);
        setResizeCorner("bottom");
        setCursor("ns-resize");
      } else if (locationY < topEdge + 15) {
        setIsResizing(true);
        setResizeCorner("top");
        setCursor("ns-resize");
      } else {
        setIsResizing(false);
        setCursor("default");
      }
    },
    onPanResponderMove: (evt, gestureState) => {
      if (isResizing) {
        if (resizeCorner === "bottom-right") {
          setSize({
            width: Math.max(30, size.width + gestureState.dx),
            height: Math.max(30, size.height + gestureState.dy),
          });
        } else if (resizeCorner === "bottom-left") {
          setSize({
            width: Math.max(30, size.width - gestureState.dx),
            height: Math.max(30, size.height + gestureState.dy),
          });
          setPosition({ x: position.x + gestureState.dx, y: position.y });
        } else if (resizeCorner === "top-right") {
          setSize({
            width: Math.max(30, size.width + gestureState.dx),
            height: Math.max(30, size.height - gestureState.dy),
          });
          setPosition({ x: position.x, y: position.y + gestureState.dy });
        } else if (resizeCorner === "top-left") {
          setSize({
            width: Math.max(30, size.width - gestureState.dx),
            height: Math.max(30, size.height - gestureState.dy),
          });
          setPosition({ x: position.x + gestureState.dx, y: position.y + gestureState.dy });
        } else if (resizeCorner === "right") {
          setSize({ width: Math.max(30, size.width + gestureState.dx), height: size.height });
        } else if (resizeCorner === "left") {
          setSize({ width: Math.max(30, size.width - gestureState.dx), height: size.height });
          setPosition({ x: position.x + gestureState.dx, y: position.y });
        } else if (resizeCorner === "bottom") {
          setSize({ width: size.width, height: Math.max(30, size.height + gestureState.dy) });
        } else if (resizeCorner === "top") {
          setSize({ width: size.width, height: Math.max(30, size.height - gestureState.dy) });
          setPosition({ x: position.x, y: position.y + gestureState.dy });
        }
      } else {
        setPosition({ x: position.x + gestureState.dx, y: position.y + gestureState.dy });
      }
    },
    onPanResponderRelease: () => {
      setIsResizing(false);
      setResizeCorner(null);
      setCursor("default");
    },
  });

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1, cursor: cursor }}>
      <Svg width="100%" height="100%">
        <Rect
          x={position.x}
          y={position.y}
          width={size.width}
          height={size.height}
          fill="lightgray"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <Circle cx={position.x} cy={position.y} r="5" fill="lightgreen" stroke="black" />
        <Circle cx={position.x + size.width} cy={position.y} r="5" fill="lightgreen" stroke="black" />
        <Circle cx={position.x} cy={position.y + size.height} r="5" fill="lightgreen" stroke="black" />
        <Circle cx={position.x + size.width} cy={position.y + size.height} r="5" fill="lightgreen" stroke="black" />
      </Svg>
    </View>
  );
};

export default SquareWithCircles;