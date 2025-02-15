import React from "react";
import {StyleSheet, View, Text ,TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const menuLeft =() =>{
    return (
      <View style={styles.container}>
        {/* Group 1 */}
        <View style={styles.menuItem}>
          <AntDesign name="home" size={24} color="black" />
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.menuItem}>
          <FontAwesome name="safari" size={24} color="black" />
          <Text style={styles.text}>Discovery</Text>
        </View>
        <View style={styles.menuItem}>
          <Feather name="folder" size={24} color="black" />
          <Text style={styles.text}>My Project</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Group 2 */}
        <View style={styles.menuItem}>
          <Feather name="trash-2" size={24} color="black" />
          <Text style={styles.text}>Trash</Text>
        </View>
        <View style={styles.menuItem}>
          <Feather name="settings" size={24} color="black" />
          <Text style={styles.text}>Settings</Text>
        </View>
        <View style={styles.menuItem}>
          <FontAwesome6 name="question-circle" size={24} color="black" />
          <Text style={styles.text}>Get Help</Text>
        </View>
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
    );
}
export default menuLeft;
const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    menuItem: {
      flexDirection: "row", // Icon and text in the same row
      alignItems: "center", // Center vertically
      marginVertical: 10, // Add spacing between items
    },
    text: {
      marginLeft: 10, // Space between icon and text
      fontSize: 16,
      color: "black",
    },
    divider: {
      height: 1,
      backgroundColor: "#ccc", // Light gray line
      marginVertical: 20, // Space above and below the line,
      width: 300
    },
    bottomSection: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 150,
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
        width: 300,
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
      }
  });