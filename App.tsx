import React from 'react';
import { StyleSheet, View } from 'react-native';
import DashThree from "../image-convert-app/src/components/dashboard/dashThree";
export default function App() {
  return (
    <View style={styles.container}>
      <DashThree/>         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
