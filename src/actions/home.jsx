import { ScrollView, StyleSheet, View } from "react-native"
import MenuLeft from "../components/menuCompos/MenuLeft";
import MenuTop from "../components/menuCompos/MenuTop";


const home = () => {
     return (
          <View style= {styles.container}>
               <MenuTop />
               <MenuLeft />
          </View>

     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: '#E8E8E8',
          flex: 1,
     }
});

export default home