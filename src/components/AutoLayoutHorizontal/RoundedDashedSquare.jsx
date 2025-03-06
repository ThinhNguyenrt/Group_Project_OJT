import React, { useState } from "react";
import { View, PanResponder, TouchableOpacity } from "react-native";
import Svg, { Rect, Circle } from "react-native-svg";
import CloseIcon from "react-native-vector-icons/AntDesign";

const RoundedDashedSquare = () => {
  const [position, setPosition] = useState(null);
  const [size, setSize] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeCorner, setResizeCorner] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const checkResizeCorner = (x, y) => {
    if (!position || !size) return null;
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
      if (!position || !size) {
        setPosition({ x: locationX, y: locationY });
        setSize({ width: 0, height: 0 });
        setIsDrawing(true);
        return;
      }

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
      }
    },
    onPanResponderMove: (evt, gestureState) => {
      if (isDrawing) {
        setSize({
          width: Math.max(30, gestureState.moveX - position.x),
          height: Math.max(30, gestureState.moveY - position.y),
        });
      } else if (isResizing) {
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
            setPosition((prev) => ({
              x: prev.x + gestureState.dx,
              y: prev.y + gestureState.dy,
            }));
            break;
          case "right":
            setSize((prev) => ({
              width: Math.max(30, prev.width + gestureState.dx),
              height: prev.height,
            }));
            break;
          case "left":
            setSize((prev) => ({
              width: Math.max(30, prev.width - gestureState.dx),
              height: prev.height,
            }));
            setPosition((prev) => ({ x: prev.x + gestureState.dx, y: prev.y }));
            break;
          case "bottom":
            setSize((prev) => ({
              width: prev.width,
              height: Math.max(30, prev.height + gestureState.dy),
            }));
            break;
          case "top":
            setSize((prev) => ({
              width: prev.width,
              height: Math.max(30, prev.height - gestureState.dy),
            }));
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
      setIsDrawing(false);
      setIsResizing(false);
      setResizeCorner(null);
      setIsDragging(false);
    },
  });

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1 }}>
      <Svg width="100%" height="100%">
        {position && size && (
          <>
            <Rect
              x={position.x}
              y={position.y}
              width={size.width}
              height={size.height}
              fill="lightgray"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="8 5"
              rx="10"
              ry="10"
            />
          </>
        )}
      </Svg>
      {position && size && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: position.x + size.width - 10,
            top: position.y - 10,
            backgroundColor: "black",
            borderRadius: 10,
            width: 20,
            height: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setPosition(null);
            setSize(null);
          }}
        >
          <CloseIcon name="close" size={15} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RoundedDashedSquare;
