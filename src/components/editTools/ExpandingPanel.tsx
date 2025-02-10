import React, { useRef, useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native"
import { Svg, Path } from "react-native-svg"

interface DropdownItemProps {
  headerTitle: string
  children: React.ReactNode
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  headerTitle,
  children,
}) => {
  const [expanded, setExpanded] = useState(false)
  const animation = useRef(new Animated.Value(0)).current // Giá trị animated ban đầu

  const toggleDropdown = () => {
    setExpanded(!expanded)
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  })

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  })

  return (
    <View style={styles.container}>
      {/* Header - Click để mở rộng */}
      <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
        <Text style={styles.title}>{headerTitle}</Text>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
          >
            <Path
              d="M6 9l6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Animated.View>
      </TouchableOpacity>

      {/* Nội dung dropdown với hiệu ứng trượt mượt */}
      <Animated.View
        style={[
          styles.dropdown,
          { height: animatedHeight, overflow: "hidden" },
        ]}
      >
        {children}
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "20%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  dropdown: {
    paddingHorizontal: 10,
  },
})

export default DropdownItem
