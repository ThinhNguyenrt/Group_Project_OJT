import { StyleSheet, View, Picker, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
const sortNew=()=>{
    const [selectedSort, setSelectedSort] = useState("Newest First");

    return (
      <View style={styles.container}>
        {/* Picker bên trái */}
        <Picker
          selectedValue={selectedSort}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedSort(itemValue)}
        >
          <Picker.Item label="Sort: Newest First" value="Newest First" />
          <Picker.Item label="Sort: Oldest First" value="Oldest First" />
        </Picker>

        {/* Icon list và grid bên phải */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconBox}>
            <Feather name="list" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Feather name="grid" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default sortNew;
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    picker: {
      height: 40,
      width: 200,
        
    },
    iconContainer: {
      flexDirection: "row",
    },
    iconBox: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginLeft: 10,
      },
  });