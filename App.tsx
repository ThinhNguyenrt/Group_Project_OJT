import React from 'react';
import { StyleSheet, View } from 'react-native';
import LayerTool from "../image-convert-app/src/components/aiTool/layerTool";
export default function App() {
  return (
    <View style={styles.container}>
        <LayerTool/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
