import React from 'react';
import { View, StyleSheet } from 'react-native';
import DashThree from '../components/dashboard/dashThree';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <ColorAdjust/> */}
      <DashThree/>
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
