import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Thay thế đường dẫn hình ảnh bằng hình ảnh logo thật của bạn
import Logo from "../../../assets/image/icons/image1.png";
import Image2 from "../../../assets/image/icons/image2.png";
import Image3 from "../../../assets/image/icons/image3.png";
import Image4 from "../../../assets/image/icons/image4.png";
import Image5 from "../../../assets/image/icons/image5.png";
import Avatar from "../../../assets/image/icons/image6.png";
const menuTop = () => {
  const [zoomLevel, setZoomLevel] = useState("50%");
  const [backgroundColors, setBackgroundColors] = useState({
    img2: "transparent",
    img3: "transparent",
    img4: "transparent",
    img5: "transparent",
  });

  const handleImagePress = (imageKey) => {
    setBackgroundColors((prevColors) => ({
      ...prevColors,
      [imageKey]: prevColors[imageKey] === "transparent" ? "white" : "transparent",
    }));
  };
  return (
    <View style={styles.container}>
      {/* Bên trái */}
      <View style={styles.leftContainer}>
        {/* Phần hiện tại trong leftSection */}
        <View style={styles.leftSection}>
          <Image source={Logo} style={styles.logo} />
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={styles.iconLeft}
          />
          <Text style={styles.projectName}>Project name</Text>
          <Octicons
            name="stack"
            size={24}
            color="black"
            style={styles.iconLeft}
          />
          <MaterialCommunityIcons
            name="arrow-left-top"
            size={24}
            color="black"
            style={styles.iconLeft}
          />
          <MaterialCommunityIcons
            name="arrow-right-top"
            size={24}
            color="black"
            style={styles.iconLeft}
          />
        </View>

        {/* Dòng chữ AI Image */}
        <Text style={styles.aiImageText}>AI Image</Text>

        <Picker
          selectedValue="Newest first"
          style={styles.sortPicker}
          onValueChange={(value) => console.log("Sort selected:", value)}
        >
          <Picker.Item label="Sort: Newest first" value="Newest first" />
          <Picker.Item label="Sort: Oldest first" value="Oldest first" />
        </Picker>
      </View>

      {/* Bên phải */}
      <View style={styles.rightSection}>
        {/* Hàng trên */}
        <View style={styles.topRow}>
          <TouchableOpacity
            style={[
              styles.imageButton,
              { backgroundColor: backgroundColors.img2 },
            ]}
            onPress={() => handleImagePress("img2")}
          >
            <Image source={Image2} style={styles.topImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.imageButton,
              { backgroundColor: backgroundColors.img3 },
            ]}
            onPress={() => handleImagePress("img3")}
          >
            <Image source={Image3} style={styles.topImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.imageButton,
              { backgroundColor: backgroundColors.img4 },
            ]}
            onPress={() => handleImagePress("img4")}
          >
            <Image source={Image4} style={styles.topImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.imageButton,
              { backgroundColor: backgroundColors.img5 },
            ]}
            onPress={() => handleImagePress("img5")}
          >
            <Image source={Image5} style={styles.topImage} />
          </TouchableOpacity>
          <Picker
            selectedValue={zoomLevel}
            style={styles.picker}
            onValueChange={(itemValue) => setZoomLevel(itemValue)}
          >
            <Picker.Item label="10%" value="10%" />
            <Picker.Item label="25%" value="25%" />
            <Picker.Item label="50%" value="50%" />
            <Picker.Item label="75%" value="75%" />
            <Picker.Item label="100%" value="100%" />
          </Picker>
          <TouchableOpacity style={styles.exportButton}>
            <Feather name="download" size={24} color="white" />
            <Text style={styles.exportText}>Export</Text>
          </TouchableOpacity>
          <Image source={Avatar} style={styles.avatar} />
        </View>

        {/* Hàng dưới */}
        <View style={styles.bottomRow}>
          <View style={styles.searchBox}>
            <Feather
              name="search"
              size={24}
              color="#8a8a8a"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search files"
              placeholderTextColor="#8a8a8a"
              style={styles.searchInput}
            />
          </View>
          <Feather
            name="bell"
            size={24}
            color="black"
            style={styles.iconRight}
          />
          <Feather
            name="settings"
            size={24}
            color="black"
            style={styles.iconRight}
          />
        </View>
        {/* <View style={styles.bottomEnd}>
          <Feather
            name="list"
            size={24}
            color="black"
            style={styles.iconRight}
          />
          <Feather
            name="grid"
            size={24}
            color="black"
            style={styles.iconRight}
          />
        </View> */}
        <View style={styles.bottomEnd}>
          <Feather
            name="list"
            size={24}
            color="black"
            style={styles.iconRight}
          />
          <Feather
            name="grid"
            size={24}
            color="black"
            style={styles.iconRight}
          />
        </View>
      </View>
    </View>
  );

};
export default menuTop;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start", // Đặt hai phần chính theo chiều dọc
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  leftContainer: {
    flexDirection: "column", // Đặt các phần tử trong left thành cột
    alignItems: "flex-start", // Canh trái
  },
  leftSection: {
    flexDirection: "row", // Đặt các phần tử trong hàng đầu tiên thành hàng ngang
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginRight: 10,
  },
  projectName: {
    fontSize: 16,
    color: "#000",
    marginLeft: 8,
    marginRight: 10,
  },
  iconLeft: {
    marginRight: 10,
  },
  aiImageText: {
    marginTop: 5, // Khoảng cách giữa hàng đầu và dòng chữ AI Image
    fontSize: 30,
    marginLeft: 35,
    fontWeight:"bold",
    color: "#000",
    fontFamily: "Roboto",
  },
  sortPicker: {
    height: 40,
    width: 180, // Đủ rộng để hiển thị nhãn
    marginTop: 10, // Khoảng cách với chữ AI Image
    marginLeft: 35, // Căn chỉnh giống chữ AI Image
  },
  rightSection: {
    flexDirection: "column", // Đặt thành hai hàng
    justifyContent: "space-between",
    alignItems: "flex-end", // Canh phải
    height: 70,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  bottomEnd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Thêm canh đều các phần tử
  },
  picker: {
    height: 40,
    width: 150, // Tăng chiều rộng để vừa nhãn
    marginRight: 10,
  },
  imageButton: {
    marginRight: 10,
    borderRadius: 5,
    padding: 5,
  },
  topImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  picker: {
    height: 40,
    width: 100,
    marginRight: 10,
  },
  exportButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    height: 35,
  },
  exportText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 5,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    width: 250,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    fontSize: 14,
    color: "#000",
    width: "100%",
  },
  iconRight: {
    marginRight: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#8a8a8a",
  },
});