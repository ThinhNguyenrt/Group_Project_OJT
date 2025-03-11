import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const designs = [
  { id: "1", name: "Unnamed Design", size: "Size", date: "5 days ago" },
  { id: "2", name: "Unnamed Design", size: "Size", date: "5 days ago" }
];

const DesignItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.size}>{item.size}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
      <ActionIcons />
    </View>
  );
};

const ActionIcons = () => {
  return (
    <View style={styles.iconsContainer}>
      <TouchableOpacity>
        <FontAwesome name="refresh" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="trash" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const DesignList = () => {
  return (
    <FlatList
      data={designs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <DesignItem item={item} />}
    />
  );
};

const styles = {
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E5E5E5",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  size: {
    fontSize: 14,
    color: "gray",
  },
  date: {
    fontSize: 14,
    color: "gray",
    marginRight: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 15,
  },
};

export default DesignList;
