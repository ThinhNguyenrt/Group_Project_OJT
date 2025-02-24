import React from 'react';
import { StyleSheet, View } from 'react-native';
import TrashList from '../components/dashboard/TrashList';


export default function App() {
  return (
    <View style={styles.container}>  
        <TrashList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
