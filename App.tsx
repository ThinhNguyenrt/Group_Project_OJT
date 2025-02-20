import React from 'react';
import { StyleSheet, View } from 'react-native';

import MenuLeftTwo from "../image-convert-app/src/components/menuCompos/menuLeftTwo";
export default function App() {
  return (
    <View style={styles.container}>  
        <MenuLeftTwo/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
