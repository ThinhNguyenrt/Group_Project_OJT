import React from 'react';
import { StyleSheet, View } from 'react-native';
import MenuTop from "../image-convert-app/src/components/menuCompos/menuTop";
import MenuLeft from "../image-convert-app/src/components/menuCompos/menuLeft";
import OtherThing from "../image-convert-app/src/components/menuCompos/otherThing";
export default function App() {
  return (
    <View style={styles.container}>
        {/* <MenuTop/> */}
        <OtherThing/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
