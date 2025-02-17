import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const folders = [
  { id: '1', name: 'Account', files: 12 },
  { id: '2', name: 'Documents', files: 5 },
  { id: '3', name: 'Presentations', files: 2 },
  { id: '4', name: 'Finance', files: 4 },
  { id: '5', name: 'Product Team', files: 32 },
  { id: '6', name: 'News', files: 8 },
  { id: '7', name: 'Content Pro', files: 11 },
  { id: '8', name: 'Goals', files: 15 },
  { id: '9', name: 'Dev Ops', files: 25 },
  { id: '10', name: 'Management', files: 4 },
  { id: '11', name: 'Operations', files: 9 },
  { id: '12', name: 'Performance', files: 32 },
];

const FolderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortText}>Sort: Newest first</Text>
          <Icon name="chevron-down" size={16} color="black" />
        </TouchableOpacity>
        <View style={styles.viewToggle}>
          <Icon name="list-outline" size={24} color="black" />
          <Icon name="grid-outline" size={24} color="black" style={{ marginLeft: 10 }} />
        </View>
      </View>

      <FlatList
        data={folders}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.folderItem}>
            <Icon name="folder" size={40} color="dodgerblue" />
            <Text style={styles.folderName}>{item.name}</Text>
            <Text style={styles.fileCount}>{item.files} Files</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  sortText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  viewToggle: {
    flexDirection: 'row',
  },
  folderItem: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  folderName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  fileCount: {
    fontSize: 12,
    color: 'gray',
  },
});

export default FolderScreen;
