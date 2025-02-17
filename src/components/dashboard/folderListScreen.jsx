import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const folders = [
  { id: '1', name: 'Scandinavian', size: '1.2 TB', lastViewed: '1 day ago', image: require('./assets/folder1.png') },
  { id: '2', name: 'Contemporary', size: '95 MB', lastViewed: '1 day ago', image: require('./assets/folder2.png') },
  { id: '3', name: 'Coastal/Hamptons', size: '35 K', lastViewed: '3 days ago', image: require('./assets/folder3.png') },
  { id: '4', name: 'Shabby Chic', size: '1.7 MB', lastViewed: '5 days ago', image: require('./assets/folder4.png') },
  { id: '5', name: 'Traditional', size: '45 K', lastViewed: '5 days ago', image: require('./assets/folder5.png') },
  { id: '6', name: 'French Country', size: '843 K', lastViewed: '5 days ago', image: require('./assets/folder6.png') },
  { id: '7', name: 'Handle', size: '154 K', lastViewed: '15 days ago', image: require('./assets/folder7.png') },
  { id: '8', name: 'Scale', size: '756 K', lastViewed: '16 days ago', image: require('./assets/folder8.png') },
  { id: '9', name: 'Floor Lamp', size: '1.6 GB', lastViewed: '17 days ago', image: require('./assets/folder9.png') },
  { id: '10', name: 'Panel Curtain', size: '1.7 TB', lastViewed: '20 days ago', image: require('./assets/folder10.png') },
];

const FolderListScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header với Sort và View Toggle */}
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

      {/* Danh sách thư mục */}
      <FlatList
        data={folders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.folderItem}>
            <Image source={item.image} style={styles.folderImage} />
            <Text style={styles.folderName}>{item.name}</Text>
            <Text style={styles.folderSize}>{item.size}</Text>
            <Text style={styles.lastViewed}>{item.lastViewed}</Text>
            <View style={styles.actions}>
              <TouchableOpacity>
                <Icon name="time-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="trash-outline" size={20} color="black" style={{ marginLeft: 15 }} />
              </TouchableOpacity>
            </View>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  folderImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 10,
  },
  folderName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  folderSize: {
    fontSize: 14,
    color: 'gray',
    marginRight: 20,
  },
  lastViewed: {
    fontSize: 14,
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    marginLeft: 20,
  },
});

export default FolderListScreen;
