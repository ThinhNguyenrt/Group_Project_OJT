import React from 'react';
import { StyleSheet, View } from 'react-native';
import MenuTop from "./src/components/menuCompos/menuTop";
import MenuLeft from "./src/components/menuCompos/menuLeft";
import OtherThing from "./src/components/menuCompos/otherThing";
import Input from "./src/components/editCompos/input";
export default function App() {
  return (
    <View style={styles.container}>
        {/* <MenuTop/> */}
        <Input/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
