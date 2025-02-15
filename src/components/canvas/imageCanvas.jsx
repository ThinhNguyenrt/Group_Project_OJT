import {StyleSheet, View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Cup from "../../../assets/canvasImage/cup.png";
import Nut from "../../../assets/canvasImage/nut.png";
import IceCream from "../../../assets/canvasImage/iceCream.png";
import Cute from "../../../assets/canvasImage/cute.png";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
const imageCanvas = () =>{
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Hàng đầu tiên */}
        <View style={[styles.row, { marginTop: 60 }]}>
          <Image source={Cup} style={styles.image} />
          <Image source={Nut} style={styles.image} />
        </View>

        {/* Hàng thứ hai */}
        <View style={styles.row}>
          <Image source={IceCream} style={styles.image} />
          <Image source={Cute} style={styles.image} />
        </View>

        {/* Hàng cuối cùng */}
        <View style={styles.describeBox}>
          <Ionicons
            name="sparkles"
            size={24}
            color="#7B7B7B"
            style={styles.icon}
          />
          <Text style={styles.text}>
            Describe the image you want to generate
          </Text>
          <Feather name="send" size={24} color="#7B7B7B" style={styles.icon} />
        </View>
      </ScrollView>
    );
};
export default imageCanvas;
const styles = StyleSheet.create({
    scrollView: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 50, // Thêm khoảng cách cuộn phía dưới
    },
    row: {
      flexDirection: "row",
      marginBottom: 20,
    },
    image: {
      width: 320,
      height: 320,
      borderRadius: 20,
      marginBottom: 20,
      marginRight:20,
    },
    describeBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF", // Nền trắng
      width: 570,
      height: 55,
      borderRadius: 10,
      borderWidth: 1, // Đường viền
      borderColor: "#C5A3FF", // Màu tím nhạt
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      alignSelf: "center", // Căn giữa ô Describe trong màn hình
      paddingHorizontal: 10, // Khoảng cách bên trong
    },
    icon: {
      marginHorizontal: 10,
    },
    text: {
      flex: 1,
      color: "#7B7B7B", // Màu chữ xám nhạt
      fontSize: 16,
    },
  });