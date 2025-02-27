import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedGestureHandler, useAnimatedStyle } from "react-native-reanimated";

const CIRCLE_RADIUS = 80; // Bán kính vòng tròn màu

const ColorEditor = () => {
  const circleX = useSharedValue(0);
  const circleY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      const newX = event.translationX;
      const newY = event.translationY;
      
      // Tính khoảng cách từ tâm (0,0) đến điểm di chuyển
      const distance = Math.sqrt(newX * newX + newY * newY);
  
      // Nếu vượt quá bán kính, giới hạn lại vị trí
      if (distance > CIRCLE_RADIUS) {
        const angle = Math.atan2(newY, newX);
        circleX.value = CIRCLE_RADIUS * Math.cos(angle);
        circleY.value = CIRCLE_RADIUS * Math.sin(angle);
      } else {
        circleX.value = newX;
        circleY.value = newY;
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }, { translateY: circleY.value }],
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.colorPickerContainer}>
        <Svg width={200} height={200} viewBox="0 0 200 200">
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="red" />
              <Stop offset="30%" stopColor="yellow" />
              <Stop offset="60%" stopColor="green" />
              <Stop offset="100%" stopColor="blue" />
            </LinearGradient>
          </Defs>
          <Circle cx="100" cy="100" r={CIRCLE_RADIUS} fill="url(#grad)" />
        </Svg>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.selector, animatedStyle]} />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default ColorEditor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  colorPickerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  selector: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: "white",
    position: "absolute",
    borderWidth: 2,
    borderColor: "black",
  },
});