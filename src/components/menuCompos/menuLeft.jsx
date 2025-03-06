import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import Home from "../dashboard/dashboardMain";
import Discovery from "../dashboard/dashTwo";
import MyProject from "../dashboard/MyProject";
import TrashList from "../dashboard/TrashList";
import AiEdit from "../generate/aiEdit";



const menuLeft = () => {

  const [activeScreen, setActiveScreen] = useState("Home");
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10, }}>
        {/* Group 1 */}

        <TouchableOpacity style={[styles.menuItem, activeScreen === "Home" && styles.backgroundButton]} onPress={() => setActiveScreen("Home")}>
          <AntDesign name="home" size={22} color="black" />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>

        < TouchableOpacity style={[styles.menuItem, activeScreen === "AiEdit" && styles.backgroundButton]} onPress={() => setActiveScreen("AiEdit")}>
          <Text style={styles.text}>New</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, activeScreen === "Discovery" && styles.backgroundButton]} onPress={() => setActiveScreen("Discovery")}>
          <FontAwesome name="safari" size={19} color="black" />
          <Text style={styles.text}>Discovery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, activeScreen === "MyProject" && styles.backgroundButton]} onPress={() => setActiveScreen("MyProject")}>
          <Feather name="folder" size={20} color="black" />
          <Text style={styles.text}>My Project</Text>
        </TouchableOpacity>



        {/* Divider */}
        <View style={styles.divider} />

        {/* Group 2 */}

        <TouchableOpacity style={[styles.menuItem, activeScreen === "TrashList" && styles.backgroundButton]} onPress={() => setActiveScreen("TrashList")}>
          <Feather name="trash-2" size={20} color="black" />
          <Text style={styles.text}>Trash</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="settings" size={20} color="black" />
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome6 name="question-circle" size={20} color="black" />
          <Text style={styles.text}>Get Help</Text>
        </TouchableOpacity>


        {/* Section Below */}
        <View style={styles.bottomSection}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Projects</Text>
              <Text style={styles.cardCounter}>6/20</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.cardSubText}>
              Monthly usage resets in 29 days
            </Text>
            <Text style={styles.planManager}>PLAN MANAGER</Text>
            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        {activeScreen === "Home" && (
          <View style={{ width: '92.8%', marginLeft: 20, height: 625, }}>
            <Home />
          </View>
        )}
        {activeScreen === "Discovery" && (
          <View style={{ width: 1215, marginLeft: 20, height: 625 }}>
            <Discovery />
          </View>
        )}
        {activeScreen === "MyProject" && (
          <View style={{ width: 1215, height: '120%', marginLeft: 20, }}>
            <MyProject />
          </View>
        )}
        {activeScreen === "TrashList" && (
          <View style={{ width: 1215, height: 625, marginLeft: 20, }}>
            <TrashList />
          </View>
        )}
        {activeScreen === "AiEdit" && (
          <View style={{ width: 1215, height: 625, marginLeft: 20, }}>
             <AiEdit/>
          </View>
        )}
      </View>

    </View>
  );
}


export default menuLeft;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  menuItem: {
    flexDirection: "row", // Icon and text in the same row
    alignItems: "center", // Center vertically
    marginVertical: 10, // Add spacing between items
    marginLeft: 20,

  },
  text: {
    marginLeft: 10, // Space between icon and text
    fontSize: 15,
    color: "black",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc", // Light gray line
    marginVertical: 20, // Space above and below the line,
    width: 260,
  },
  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    marginTop: 454,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: 260,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  cardCounter: {
    fontSize: 14,
    color: "gray",
  },
  progressBar: {
    height: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    marginVertical: 10,
    overflow: "hidden",
  },
  progressFill: {
    width: "30%",
    height: "100%",
    backgroundColor: "green",
  },
  cardSubText: {
    fontSize: 12,
    color: "gray",
    marginVertical: 5,
  },
  planManager: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginVertical: 5,
  },
  upgradeButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 10,
  },
  upgradeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  backgroundButton: {
    backgroundColor: '#F8F8F8',
    width: 240,
    height: 40,
    paddingLeft: 15,
    borderRadius: 15,
  }
});