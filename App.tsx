import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageSettings from './src/components/editTools/image/ImageSettings';

export default function App() {
  const handleSettingsChange = (settings) => {
    console.log('Image settings changed:', settings);
  };

  return (
    <View style={styles.container}>
      <ImageSettings onSettingsChange={handleSettingsChange} />
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
