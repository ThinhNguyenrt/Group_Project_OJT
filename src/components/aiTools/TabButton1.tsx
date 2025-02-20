import { TouchableOpacity, StyleSheet, Image, Text } from "react-native"
import { TabButtonProps } from "./TabButton2"

const TabButton1: React.FC<TabButtonProps> = ({
  title,
  icon,
  onPress,
  isActive,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tabButton, isActive && styles.activeButton]}
      onPress={onPress}
    >
      <Image source={icon} style={styles.iconContainer} />
      <Text style={[styles.tabText, isActive && styles.activeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tabButton: {
    width: "15%",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: "#e0e0e0",
  },
  tabText: {
    fontSize: 12,
    color: "#555",
  },
  activeText: {
    color: "#000",
    fontWeight: "bold",
  },
  iconContainer: {
    width: 20,
    height: 20,
    marginRight: "7%",
  },
})

export default TabButton1
