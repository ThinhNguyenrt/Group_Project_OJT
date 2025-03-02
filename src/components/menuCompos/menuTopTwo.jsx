import React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Logo from "../../../assets/image/icons/image1.png";
import Avatar from "../../../assets/image/icons/image6.png";

const menuTopTwo = () => {
  return (
    <View style={styles.container}>
      {/* Bên trái */}
      <View style={styles.leftContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.aiImageText}>AI Image</Text>
      </View>

      {/* Bên phải */}
      <View style={styles.rightContainer}>
        <View style={styles.searchBox}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput placeholder="Search files" style={styles.searchInput} />
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Feather name="settings" size={24} color="black" style={styles.icon}/>
        </TouchableOpacity>
        <Image source={Avatar} style={styles.avatar} />
      </View>
    </View>
  );
};

export default menuTopTwo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginRight: 10,
  },
  aiImageText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#000",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    width:280,
    marginRight: 15,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    fontSize: 16,
    color: "#000",
    width: 120,
  },
  icon: {
    marginHorizontal: 10,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
