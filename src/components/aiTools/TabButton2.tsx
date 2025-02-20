import {
    ImageSourcePropType,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
  } from "react-native"
  
  export interface TabButtonProps {
    title: string
    icon: ImageSourcePropType
    onPress: () => void
    isActive: boolean
  }
  
  const TabButton2: React.FC<TabButtonProps> = ({
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
      width: "5%",
      padding: 10,
      justifyContent: "center",
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
    },
  })
  
  export default TabButton2
  