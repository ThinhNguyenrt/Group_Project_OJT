import React, { useState } from "react";
import { View, PanResponder } from "react-native";
import Svg, { Rect, Circle } from "react-native-svg";

const SquareWithCircles = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeCorner, setResizeCorner] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const checkResizeCorner = (x, y) => {
    const rightEdge = position.x + size.width;
    const bottomEdge = position.y + size.height;
    const leftEdge = position.x;
    const topEdge = position.y;

    const nearRight = Math.abs(x - rightEdge) < 10;
    const nearLeft = Math.abs(x - leftEdge) < 10;
    const nearTop = Math.abs(y - topEdge) < 10;
    const nearBottom = Math.abs(y - bottomEdge) < 10;

    const nearTopLeft = nearLeft && nearTop;
    const nearTopRight = nearRight && nearTop;
    const nearBottomLeft = nearLeft && nearBottom;
    const nearBottomRight = nearRight && nearBottom;

    if (nearBottomRight) return "bottom-right";
    if (nearBottomLeft) return "bottom-left";
    if (nearTopRight) return "top-right";
    if (nearTopLeft) return "top-left";
    if (nearRight) return "right";
    if (nearLeft) return "left";
    if (nearBottom) return "bottom";
    if (nearTop) return "top";
    return null;
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      const resizeCorner = checkResizeCorner(locationX, locationY);

      const insideRect =
        locationX > position.x &&
        locationX < position.x + size.width &&
        locationY > position.y &&
        locationY < position.y + size.height;

      if (resizeCorner) {
        setResizeCorner(resizeCorner);
        setIsResizing(true);
      } else if (insideRect) {
        setIsDragging(true);
      } else {
        // Nếu click ngoài hình, di chuyển hình đến giữ con chuột
        setPosition({
          x: locationX - size.width / 2,
          y: locationY - size.height / 2,
        });
      }
    },
    onPanResponderMove: (evt, gestureState) => {
      if (isResizing) {
        switch (resizeCorner) {
          case "bottom-right":
            setSize((prev) => ({
              width: Math.max(30, prev.width + gestureState.dx),
              height: Math.max(30, prev.height + gestureState.dy),
            }));
            break;
          case "bottom-left":
            setSize((prev) => ({
              width: Math.max(30, prev.width - gestureState.dx),
              height: Math.max(30, prev.height + gestureState.dy),
            }));
            setPosition((prev) => ({ x: prev.x + gestureState.dx, y: prev.y }));
            break;
          case "top-right":
            setSize((prev) => ({
              width: Math.max(30, prev.width + gestureState.dx),
              height: Math.max(30, prev.height - gestureState.dy),
            }));
            setPosition((prev) => ({ x: prev.x, y: prev.y + gestureState.dy }));
            break;
          case "top-left":
            setSize((prev) => ({
              width: Math.max(30, prev.width - gestureState.dx),
              height: Math.max(30, prev.height - gestureState.dy),
            }));
            setPosition((prev) => ({ x: prev.x + gestureState.dx, y: prev.y + gestureState.dy }));
            break;
          case "right":
            setSize((prev) => ({ width: Math.max(30, prev.width + gestureState.dx), height: prev.height }));
            break;
          case "left":
            setSize((prev) => ({ width: Math.max(30, prev.width - gestureState.dx), height: prev.height }));
            setPosition((prev) => ({ x: prev.x + gestureState.dx, y: prev.y }));
            break;
          case "bottom":
            setSize((prev) => ({ width: prev.width, height: Math.max(30, prev.height + gestureState.dy) }));
            break;
          case "top":
            setSize((prev) => ({ width: prev.width, height: Math.max(30, prev.height - gestureState.dy) }));
            setPosition((prev) => ({ x: prev.x, y: prev.y + gestureState.dy }));
            break;
          default:
            break;
        }
      } else if (isDragging) {
        setPosition((prev) => ({
          x: prev.x + gestureState.dx,
          y: prev.y + gestureState.dy,
        }));
      }
    },
    onPanResponderRelease: () => {
      setIsResizing(false);
      setResizeCorner(null);
      setIsDragging(false);
    },
  });

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1 }}>
      <Svg width="100%" height="100%">
        {/* Hình chữ nhật */}
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
        {/* Các điểm chỉnh kích thước chỉ xuất hiện ở các góc */}
        <Circle cx={position.x} cy={position.y} r="5" fill="lightgreen" stroke="black" />
        <Circle cx={position.x + size.width} cy={position.y} r="5" fill="lightgreen" stroke="black" />
        <Circle cx={position.x} cy={position.y + size.height} r="5" fill="lightgreen" stroke="black" />
        <Circle cx={position.x + size.width} cy={position.y + size.height} r="5" fill="lightgreen" stroke="black" />
      </Svg>
    </View>
  );
};

export default SquareWithCircles;
