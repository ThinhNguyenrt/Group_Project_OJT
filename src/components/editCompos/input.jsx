import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import A_ from "../../../assets/image/icons/A_.png";

const InputComponent = () => {
  const [selectedFont, setSelectedFont] = useState("Font");
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("%");
  const [switchValue, setSwitchValue] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [isColorDropdownVisible, setColorDropdownVisible] = useState(false);

  const fonts = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
  ];
  const colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00"];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectFont = (font) => {
    setSelectedFont(font);
    setDropdownVisible(false);
  };

  const toggleColorDropdown = () => {
    setColorDropdownVisible(!isColorDropdownVisible);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setColorDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Picker */}
      <View style={{ position: "relative" }}>
        <TouchableOpacity
          style={styles.pickerContainer}
          onPress={toggleDropdown}
        >
          <Text style={styles.pickerText}>{selectedFont}</Text>
          <Ionicons
            name={isDropdownVisible ? "chevron-up" : "chevron-down"}
            size={20}
            color="#333"
            style={styles.icon}
          />
        </TouchableOpacity>
        {isDropdownVisible && (
          <View style={styles.dropdownListContainer}>
            <FlatList
              data={fonts}
              keyExtractor={(item, index) => index.toString()}
              style={styles.dropdownList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => selectFont(item)}
                >
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>

      {/* Text Input 1 */}
      <View style={styles.inputContainer}>
        <Image source={A_} style={styles.inputIcon} />
        <Text style={styles.label}>Font</Text>
        <TextInput
          style={styles.textInput}
          placeholder=""
          value={textInput1}
          onChangeText={setTextInput1}
        />
      </View>

      {/* Text Input 2 */}
      <View style={styles.inputContainer}>
        <Image source={A_} style={styles.inputIcon} />
        <Text style={styles.label}>Font</Text>
        <TextInput
          style={styles.textInput}
          placeholder=""
          value={textInput2}
          onChangeText={setTextInput2}
        />
        <Text style={styles.label}>%</Text>
      </View>

      {/* Color Picker */}
      <View style={{ position: "relative" }}>
        <TouchableOpacity
          style={styles.colorPickerContainer}
          onPress={toggleColorDropdown}
        >
          <View
            style={[styles.colorIndicator, { backgroundColor: selectedColor }]}
          />
          <Text style={[styles.label, { marginRight: 210 }]}>Font</Text>
          <Ionicons
            name={isColorDropdownVisible ? "chevron-up" : "chevron-down"}
            size={20}
            color="#333"
            style={styles.icon}
          />
        </TouchableOpacity>
        {isColorDropdownVisible && (
          <View style={styles.dropdownListContainer}>
            <FlatList
              data={colors}
              keyExtractor={(item, index) => index.toString()}
              style={styles.dropdownList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => selectColor(item)}
                >
                  <View
                    style={[styles.colorIndicator, { backgroundColor: item }]}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>

      {/* Switch Component */}
      <View style={styles.switchContainer}>
        <Image source={A_} style={styles.inputIcon} />
        <Text style={styles.switchLabel}>Font</Text>
        <Switch
          value={switchValue}
          onValueChange={(value) => setSwitchValue(value)}
          trackColor={{ false: "#d3d3d3", true: "#4CAF50" }} // Màu nền khi tắt và bật
          thumbColor={switchValue ? "#ffffff" : "#f4f4f4"} // Màu của nút bấm
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }} // Tăng kích thước nút switch
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 8,
    backgroundColor: "#e5e5e5",
    width: 370,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    backgroundColor: "#f7f7f7",
    marginBottom: 16,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 8,
  },
  pickerText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownListContainer: {
    position: "absolute",
    top: 48,
    zIndex: 1000,
    maxHeight: 200,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    backgroundColor: "#f7f7f7",
    width: "100%",
  },
  dropdownList: {
    width: "100%",
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#f7f7f7",
  },
  inputIcon: {
    width: 25,
    height: 25,
    marginRight: 8,
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginRight: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    textAlign: "right",
    paddingRight: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 12,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    backgroundColor: "#f7f7f7",
  },
  switchLabel: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  colorPickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    backgroundColor: "#f7f7f7",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  colorIndicator: {
    width: 25,
    height: 25,
    borderRadius: 5,
    marginRight: 8,
  },
});

export default InputComponent;
