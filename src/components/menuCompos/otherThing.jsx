import React from "react"
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import { AntDesign, Feather } from "@expo/vector-icons"
import Logo from "../../../assets/image/icons/image1.png"
import Image7 from "../../../assets/image/icons/image7.png"
import Image8 from "../../../assets/image/icons/image8.png"
import Image9 from "../../../assets/image/icons/image9.png"
import Image10 from "../../../assets/image/icons/image10.png"
import Slider from "@react-native-community/slider"
const OtherThing = () => {
  const [aspectRatio, setAspectRatio] = React.useState(50)
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Phần hình ảnh trên cùng */}
      <Image source={Image7} style={styles.topImage} />
      <Image source={Image8} style={styles.topImagez} />

      {/* Phần profile */}
      <View style={styles.profileSection}>
        <Image source={Image9} style={styles.profileImage} />
        <View style={styles.profile}>
          <Text style={styles.profileName}>Audrey Simmons</Text>
          <Text style={styles.profileDesc}>Stunning!</Text>
        </View>
      </View>

      {/* Card folder */}
      <View style={styles.card}>
        <View style={styles.rowFirst}>
          <Feather
            name="folder"
            size={48}
            color="#5DB0EF"
            style={styles.folder}
          />
          <Feather name="more-horizontal" size={24} color="gray" />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Name</Text>
          <Text style={styles.cardSubtitle}>32 Files</Text>
        </View>
      </View>
      <View style={styles.circle}>
        <AntDesign name="left" size={24} color="black" />
      </View>
      {/* New Design */}
      <View style={styles.newDesignSection}>
        <View style={styles.circle}>
          <AntDesign name="edit" size={24} color="black" />
        </View>
        <Text style={styles.newDesignText}>New Design</Text>
        <TouchableOpacity>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Name Section */}
      <View style={styles.cardTwo}>
        <Image source={Image10} style={styles.iconImage} />
        <View style={styles.textT}>
          <Text style={styles.cardTitle}>Name</Text>
          <Text style={styles.kilo}>94 Kb</Text>
        </View>

        <TouchableOpacity>
          <AntDesign
            name="close"
            size={24}
            color="gray"
            style={styles.closeButton}
          />
        </TouchableOpacity>
      </View>

      {/* Empty Box */}
      <View style={styles.card}></View>
      <Text style={styles.emptyText}>Poster</Text>
      <Text style={styles.editText}>Edited 3 days ago</Text>
      {/* Logo ở cuối */}
      <Image source={Logo} style={styles.bottomImage} />
    </ScrollView>
  )
}

export default OtherThing

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    alignSelf: "center", // Căn giữa nội dung
  },
  topImage: {
    height: 64,
    width: 64,
    marginBottom: 20,
  },
  topImagez: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  profile: {
    flexDirection: "column",
    marginLeft: 10,
  },
  profileSection: {
    marginBottom: 20,
    flexDirection: "row",
  },
  profileImage: {
    width: 36, // Giảm kích thước ảnh profile
    height: 36,
    borderRadius: 25,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 14, // Giảm kích thước chữ
    fontWeight: "bold",
  },
  profileDesc: {
    fontSize: 12,
    color: "gray",
  },
  card: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 8, // Giảm padding
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20, // Giảm khoảng cách
    elevation: 3,
    height: 130,
    width: 230,
  },
  rowFirst: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  folder: {
    marginTop: 8,
  },
  cardText: {
    flex: 1,
    marginLeft: 8, // Giảm khoảng cách
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 14, // Giảm kích thước chữ
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 10, // Giảm kích thước chữ
    color: "gray",
  },
  circle: {
    width: 40, // Kích thước hình tròn
    height: 40,
    borderRadius: 20, // Đường kính chia 2 để tạo hình tròn
    backgroundColor: "white", // Màu nền trắng
    justifyContent: "center", // Căn giữa icon theo chiều dọc
    alignItems: "center", // Căn giữa icon theo chiều ngang
    shadowColor: "#000", // Tạo bóng (nếu cần)
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Đổ bóng cho Android
    marginBottom: 13,
  },
  newDesignSection: {
    flexDirection: "row",
    alignItems: "center", // Căn giữa theo chiều dọc
    justifyContent: "space-between", // Phân bố đều các phần tử
    backgroundColor: "#EBE7FE",
    paddingHorizontal: 16, // Tăng khoảng cách hai bên
    paddingVertical: 12,
    borderRadius: 12, // Làm mềm góc
    marginBottom: 15,
    width: 250, // Đảm bảo kích thước vừa phải
    height: 80,
  },
  newDesignText: {
    fontSize: 16, // Tăng kích thước chữ một chút để cân đối
    fontWeight: "500",
    textAlign: "center",
    flex: 1, // Đẩy text nằm giữa
  },
  cardTwo: {
    marginTop: 15,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 8, // Giảm padding
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20, // Giảm khoảng cách
    elevation: 3,
    height: 50,
    width: 210,
  },
  textT: {
    marginLeft: 8,
    marginRight: 70,
    flexDirection: "column",
  },
  kilo: {
    fontSize: 12,
    color: "gray",
  },

  iconImage: {
    width: 30, // Giảm kích thước icon
    height: 30,
    borderRadius: 8,
    marginRight: 8,
  },
  emptyText: {
    fontSize: 16, // Giảm kích thước chữ
    fontWeight: "bold",
    marginBottom: 4,
  },
  editText: {
    fontSize: 12, // Giảm kích thước chữ
    color: "gray",
  },
  closeButton: {
    justifyContent: "center",
    marginRight: 5,
  },
  aspectRatioSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 8,
  },
  aspectRatioLabel: {
    fontSize: 24,
    fontWeight: "500",
    color: "black",
  },
  aspectRatioIcon: {
    marginLeft: 8,
  },
  slider: {
    width: "100%",
    height: 40,
    marginVertical: 8,
  },
  bottomImage: {
    height: 40,
    width: 40,
  },
})
