import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialSettings from './src/components/editTools/material/MaterialSettings';

export default function App() {
  const handleSettingsChange = (settings) => {
    console.log('Material settings changed:', settings);
  };

  return (
    <View style={styles.container}>
      <MaterialSettings onSettingsChange={handleSettingsChange} />
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
