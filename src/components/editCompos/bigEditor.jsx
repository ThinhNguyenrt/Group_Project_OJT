import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import AligLeft from "../../../assets/image/icons/alig-left.png";
import AligCenter from "../../../assets/image/icons/alig-center.png";
import AligRight from "../../../assets/image/icons/alig-right.png";
import AligJusti from "../../../assets/image/icons/alig-justi.png";
import RecentIcon from "../../../assets/image/icons/recent.png";
import HotIcon from "../../../assets/image/icons/hot.png";
import SwatchesIcon from "../../../assets/image/icons/swatches.png";
import ColorMixerIcon from "../../../assets/image/icons/color-mixer.png";

const BigEditor = () => {
    const images = [
        require("../../../assets/image/icons/ima1.png"),
        require("../../../assets/image/icons/ima2.png"),
        require("../../../assets/image/icons/ima3.png"),
        require("../../../assets/image/icons/ima4.png"),
        require("../../../assets/image/icons/ima5.png"),
        require("../../../assets/image/icons/ima6.png"),
        require("../../../assets/image/icons/ima7.png"),
        require("../../../assets/image/icons/ima8.png"),
        require("../../../assets/image/icons/ima9.png"),
        require("../../../assets/image/icons/ima10.png"),
        require("../../../assets/image/icons/ima11.png"),
        require("../../../assets/image/icons/ima12.png"),
        require("../../../assets/image/icons/ima13.png"),
        require("../../../assets/image/icons/ima14.png"),
    ];
  const menuData = [
    { type: "icon", items: [AligLeft, AligCenter, AligRight, AligJusti] },
    { type: "icon", items: [images[0], images[1], images[2], images[3], images[4], images[5]] },
    { type: "text", items: ["Euler", "LMS", "Heun", "DDIM", "DPM"] },
    { type: "text", items: ["On", "Off"] },
    { type: "text", items: ["Inpaint masked", "Inpaint not masked"] },
    { type: "text", items: ["Fill", "Original", "L. Noise", "Nothing"] },
    { type: "iconWithText", items: [
        { icon: RecentIcon, text: "Recent" },
        { icon: HotIcon, text: "Hot" }
      ], flexible: true 
    },
    { type: "icon", items: [images[6], images[7], images[8], images[9], images[10]] },
    { type: "icon", items: [images[11], images[12], images[13]] },
    { type: "iconWithText", items: [
        { icon: SwatchesIcon, text: "Swatches" },
        { icon: ColorMixerIcon, text: "Color Mixer" }
      ] 
    },
  ];

  return (
    <View style={styles.container}>
      {menuData.map((row, rowIndex) => (
        <View style={[styles.rowContainer, row.flexible && styles.flexibleRow]} key={rowIndex}>
          {row.items.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity style={[styles.centeredButton, row.flexible && styles.flexibleButton]}>
                {row.type === "icon" && <Image source={item} style={styles.icon} />}
                {row.type === "text" && <Text style={styles.buttonText}>{item}</Text>}
                {row.type === "iconWithText" && (
                  <>
                    <Image source={item.icon} style={styles.icon} />
                    <Text style={styles.buttonText}>{item.text}</Text>
                  </>
                )}
              </TouchableOpacity>
              {index < row.items.length - 1 && <View style={styles.separator} />}
            </React.Fragment>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  rowContainer: {
    width: '71%',
    height:'8%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  flexibleRow: {
    width: 'auto',
    alignSelf: "flex-start",
  },
  centeredButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "transparent",
    borderRadius: 4,
  },
  flexibleButton: {
    flex: 0,
    paddingHorizontal: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  separator: {
    width: 1,
    height: "60%",
    backgroundColor: "rgba(0,0,0,0.2)",
    marginHorizontal: 8,
  },
});

export default BigEditor;
