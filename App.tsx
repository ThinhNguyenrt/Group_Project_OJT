import React from 'react';
import { StyleSheet, View } from 'react-native';
import ColorAdjust from "../image-convert-app/src/components/editTool/ColorAdjustment";
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
    backgroundColor: '#F5F5F5',
  },
});
