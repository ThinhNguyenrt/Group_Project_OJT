import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Image24 from "../../../assets/aiToolImage/image24.png";
import Image25 from "../../../assets/aiToolImage/image25.png";
import Image26 from "../../../assets/aiToolImage/image26.png";
import Image27 from "../../../assets/aiToolImage/image27.png";
import Image28 from "../../../assets/aiToolImage/image28.png";
import Image29 from "../../../assets/aiToolImage/image29.png";
import Image30 from "../../../assets/aiToolImage/image30.png";
import Image31 from "../../../assets/aiToolImage/image31.png";
import Image32 from "../../../assets/aiToolImage/image32.png";
const layerTool = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.layerText}>Layer</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainerLarge}>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={[styles.icon]} // Điều chỉnh vị trí của icon
          />
          <View style={styles.imageContainer}>
            <Image source={Image24} style={styles.image} />
          </View>
        </View>
        <View style={styles.imageContainerLarge}>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={[styles.icon]} // Điều chỉnh vị trí của icon
          />
          <View style={styles.imageContainer}>
            <Image source={Image25} style={styles.image} />
          </View>
        </View>
        <View style={styles.imageContainerLarge}>
          <AntDesign
            name="down"
            size={24}
            color="black"
            style={[styles.icon]} // Điều chỉnh vị trí của icon
          />
          <View style={styles.imageContainer}>
            <Image source={Image26} style={styles.image} />
          </View>
        </View>
        <View style={styles.lineContainer}>
          {/* Image27 */}
          <View style={styles.row}>
            <View style={styles.verticalLineLeft} /> {/* Đường thẳng xuất phát từ bên trái */}
            <View style={styles.imageContainerSmall}>
              <Image source={Image27} style={styles.image} />
            </View>
          </View>
          {/* Đường thẳng nối từ Image27 xuống Image28 */}
          <View style={styles.verticalLine} />

          {/* Image28 */}
          <View style={styles.row}>
            <View style={styles.verticalLineLeft} /> {/* Đường thẳng xuất phát từ bên trái */}
            <View style={styles.imageContainerSmall}>
              <Image source={Image28} style={styles.image} />
            </View>
          </View>
          {/* Đường thẳng nối từ Image28 xuống Image29 */}
          <View style={styles.verticalLine} />

          {/* Image29 */}
          <View style={styles.row}>
            <View style={styles.verticalLineLeft} /> {/* Đường thẳng xuất phát từ bên trái */}
            <View style={styles.imageContainerSmall}>
              <Image source={Image29} style={styles.image} />
            </View>
          </View>
          {/* Đường thẳng nối từ Image29 xuống Image30 */}
          <View style={styles.verticalLine} />

          {/* Image30 */}
          <View style={styles.row}>
            <View style={styles.verticalLineLeft} /> {/* Đường thẳng xuất phát từ bên trái */}
            <View style={styles.imageContainerSmall}>
              <Image source={Image30} style={styles.image} />
            </View>
          </View>
          {/* Đường thẳng nối từ Image30 xuống Image31 */}
          <View style={styles.verticalLine} />

          {/* Image31 */}
          <View style={styles.row}>
            <View style={styles.verticalLineLeft} /> {/* Đường thẳng xuất phát từ bên trái */}
            <View style={styles.imageContainerSmall}>
              <Image source={Image31} style={styles.image} />
            </View>
          </View>
        </View>
        <View style={[styles.imageContainerLarge, { marginBottom: 250 }]}>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={[styles.icon]} // Điều chỉnh vị trí của icon
          />
          <View style={styles.imageContainer}>
            <Image source={Image32} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default layerTool;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: 280,
  },
  layerText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  imageContainerLarge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
  },
  imageContainer: {
    height: 100,
    width: 190,
    borderRadius: 8,
    backgroundColor: "#F7F7F7",
    marginLeft: 6,
  },
  lineContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  verticalLine: {
    width: 1, // Độ rộng của đường thẳng
    height: 20, // Chiều cao đường thẳng giữa các hình ảnh
    backgroundColor: "#000", // Màu đen
    marginLeft: 65, // Canh đúng vị trí bên trái của khung
  },
  verticalLineLeft: {
    width: 1,
    height: "100%", // Chiều cao bằng với khung chứa
    backgroundColor: "#000", // Màu đen
    marginRight: 10, // Khoảng cách với khung ảnh
  },
  imageContainerSmall: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F7F7",
    height: 70,
    width: 168,
    marginBottom: 10,
    borderRadius: 8,
    marginLeft: 65,
    padding: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  icon: {
    marginLeft: 5,
  },
});
