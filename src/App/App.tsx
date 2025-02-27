import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageSettings from '../components/editTools/image/ImageSettings';

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
