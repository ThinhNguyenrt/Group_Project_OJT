import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import Outline from "../../../assets/image/icons/outline.png";

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]); // Lưu nhiều mục được chọn

  const menuItems = ["Label", "Label", "Label", "Label"];

  const toggleSelection = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index)); // Bỏ chọn
    } else {
      setSelectedItems([...selectedItems, index]); // Thêm vào danh sách chọn
    }
  };

  return (
    <View style={styles.container}>
      {menuItems.map((label, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.menuItem,
            selectedItems.includes(index) && styles.highlightedItem, // Kiểm tra nếu đã chọn
          ]}
          onPress={() => toggleSelection(index)} // Bật/tắt chọn mục
        >
          <Image source={Outline} style={styles.inputIcon} />
          <Text
            style={[
              styles.label,
              selectedItems.includes(index) && styles.highlightedText, // Đổi màu chữ khi chọn
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#transparent",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: "#e5e5e5",
    width: "25%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  highlightedItem: {
    backgroundColor: "#ffffff", // Màu nền khi được chọn
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
});

export default Menu;
