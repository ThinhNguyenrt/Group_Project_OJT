import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const categories = ["3D Renders", "Nature", "Travel", "Animals", "People", "Food & Drink", "Arts & Culture"];
const filters = [
  { name: "Recent", icon: "clock" },
  { name: "Hot", icon: "fire" },
];

const gridData = [
  [
    { uri: "https://img.freepik.com/premium-photo/display-beauty-products-with-bottle-liquid-shelf_192217-624.jpg?w=360", height: 500 },
    { uri: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMV9zYXR1cm5faW5fdGhlX3N0eWxlX29mX3Bhc3RlbF9kcmVhbXlfY2hhcm1pbmdfd19hNTM4MGNkYi00ZGNmLTQzODYtYWEyZS03YzZlZDczNjI3ODRfMi5qcGc.jpg", height: 300 },
    { uri: "https://img.freepik.com/premium-photo/hand-hold-like-button-icon-social-media-sign-chat-application-technology-community-background-banner-concept-3d-cartoon-illustration_56104-1740.jpg?w=360", height: 300 },
  ],
  [
    { uri: "https://img.freepik.com/premium-photo/chinese-asian-cartoon-background-illustrations-kids-cartoon-style-ai-generated_755721-1470.jpg", height: 300 },
    { uri: "https://img.freepik.com/psd-premium/icono-deforestacion-problemas-calentamiento-global-3d-aislado-sobre-fondo-blanco-ilustracion-representacion-3d-trazado-recorte_696265-1783.jpg?w=360", height: 300 },
    { uri: "https://www.shutterstock.com/image-illustration/3d-rendered-colorful-random-sizes-260nw-2275827889.jpg", height: 400 },
  ],
  [
    { uri: "https://img.freepik.com/free-photo/easter-decorative-eggs-arrangement_23-2150245764.jpg", height: 400 , text: { title: "Helen", date: "02.03.2023", description: "Save, share and use your image however you please." }},
    { uri: "https://img.freepik.com/foto-premium/un-illustrazione-digitale-di-uno-stand-gastronomico-mco_852323-60.jpg", height: 300 },
    { uri:"https://cdn.giaoducthoidai.vn/images/a1f3ffc78501286aa10fe12609503c8b5a6808af1594452d900297c79c869a8388748cb002ced09ec313a94203d193934151594b3c8410de2449cccdb3a1f34cee0238e58c147573160ba4fa48f9c4e39225290b8b5a41c6425f891fe07ae05b/027319f28a0b234d96e49ed024b333f9-1024x720-9774-5749.jpg.webp",height:240}
  ],
  [
    { uri: "https://smartlegal.id/wp-content/uploads/2024/12/Pop-Mart-Labubu-jpg.webp", height: 300},
    { uri: "https://img.freepik.com/premium-photo/chinese-asian-cartoon-background-illustrations-kids-cartoon-style-ai-generated_755721-1470.jpg", height: 210 },
    { uri: "https://cdn.prod.website-files.com/61854e3ef69d07a1f22d8d6f/62278e0a0810f907e2d24955_instant-win-wink.jpg", height: 225 },
    { uri: "https://img.freepik.com/free-photo/fantasy-landscape-with-gradient-cube_23-2149312128.jpg", height: 300 },
  ],
];

const DashTwo = () => {
  const [selectedFilter, setSelectedFilter] = useState("Recent");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryContainer}
          >
            {categories.map((item, index) => (
              <Text
                key={index}
                style={[
                  styles.categoryText,
                  item === "3D Renders" && styles.boldText,
                ]}
              >
                {item}
              </Text>
            ))}
          </ScrollView>

          <View style={styles.filterContainer}>
            {filters.map((item) => (
              <TouchableOpacity
                key={item.name}
                onPress={() => setSelectedFilter(item.name)}
                style={[
                  styles.filterButton,
                  selectedFilter === item.name && {
                    backgroundColor: "#F7F7F7",
                  }, // Thay đổi màu khi được chọn
                ]}
              >
                <FontAwesome5
                  name={item.icon}
                  size={14}
                  color="black"
                  style={styles.icon}
                />
                <Text style={styles.filterText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.gridContainer}>
          {gridData.map((column, columnIndex) => (
            <View key={columnIndex} style={styles.column}>
              {column.map((image, imageIndex) => (
                <View
                  key={imageIndex}
                  style={[styles.imageWrapper, { height: image.height }]}
                >
                  <Image
                    source={{ uri: image.uri }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                  {image.text && (
                    <View style={styles.textOverlay}>
                      <Text style={styles.title}>{image.text.title}</Text>
                      <Text style={styles.date}>{image.text.date}</Text>
                      <Text style={styles.description}>
                        {image.text.description}
                      </Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8", padding: 10 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  categoryContainer: { flexDirection: "row", flex: 1 },
  categoryText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 5,
  },
  boldText: { fontWeight: "bold", color: "#003366" },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },
  activeFilterButton: {
    backgroundColor: "#F7F7F7", // Nền khi active
    borderColor: "#999", // Thay đổi màu viền khi active
  }, // Loại bỏ hiệu ứng active màu nền
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "white", // Mặc định là trắng
  },
  filterText: {
    marginLeft: 5,
    color: "#333",
  },

  gridContainer: { flexDirection: "row", justifyContent: "space-between" },
  column: { width: "23%" }, // Điều chỉnh để cân bằng
  imageWrapper: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: { width: "100%", height: "100%", borderRadius: 12 },
  textOverlay: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  title: { fontWeight: "bold", color: "black", textAlign: "center" },
  date: { color: "black", textAlign: "center" },
  description: { color: "black", fontSize: 12, textAlign: "center" },
});


export default DashTwo;
