import React from 'react';
import { StyleSheet, View } from 'react-native';
import BrushMenu from "./src/components/editTools/brush/BrushSettings";
export default function App() {
  const handleSettingsChange = (settings) => {
    console.log('Brush settings changed:', settings);
  };
  return (
    <View style={styles.container}>
      <BrushMenu onSettingsChange={handleSettingsChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
