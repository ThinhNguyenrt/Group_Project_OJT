import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Design {
  id: string;
  name: string;
  size: string;
  date: string;
}

const designs: Design[] = [
  { id: "1", name: "Unnamed Design", size: "Size", date: "5 days ago" },
  { id: "2", name: "Unnamed Design", size: "Size", date: "5 days ago" }
];

interface DesignItemProps {
  item: Design;
}

const DesignItem: React.FC<DesignItemProps> = ({ item }) => {
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

const ActionIcons: React.FC = () => {
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

const DesignList: React.FC = () => {
  return (
    <FlatList
      data={designs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <DesignItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default DesignList;