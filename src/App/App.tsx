import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColorAdjust from '../components/editTool/ColorAdjustment';

export default function App() {

  return (
    <View style={styles.container}>
      <ColorAdjust/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
