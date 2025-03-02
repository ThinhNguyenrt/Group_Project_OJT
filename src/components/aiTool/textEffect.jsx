import { StyleSheet, View, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons'; // Sử dụng icon từ Expo Vector Icons

import Image11 from "../../../assets/aiToolImage/image11.png";
import Image12 from "../../../assets/aiToolImage/image12.png";
import Image13 from "../../../assets/aiToolImage/image13.png";
import Image14 from "../../../assets/aiToolImage/image14.png";
import Image15 from "../../../assets/aiToolImage/image15.png";
import Image16 from "../../../assets/aiToolImage/image16.png";
import Image17 from "../../../assets/aiToolImage/image17.png";
import Image18 from "../../../assets/aiToolImage/image18.png";

const TextEffect = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.headerText}>Text Effect</Text>

            {/* Search Input */}
            <View style={styles.searchContainer}>
                <MaterialIcons name="search" size={24} color="black" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#888"
                />
            </View>

            {/* Image List */}
            <ScrollView contentContainerStyle={styles.imageList}>
                <Image source={Image11} style={styles.image} />
                <Image source={Image12} style={styles.image} />
                <Image source={Image13} style={styles.image} />
                <Image source={Image14} style={styles.image} />
                <Image source={Image15} style={styles.image} />
                <Image source={Image16} style={styles.image} />
                <Image source={Image17} style={styles.image} />
                <Image source={Image18} style={styles.image} />
            </ScrollView>
        </View>
    );
};

export default TextEffect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        width: 216,
        marginBottom: 16,
        paddingHorizontal: 8,
        backgroundColor: '#F7F7F7',
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 40,
        color: '#000',
    },
    imageList: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 150,
    },
    image: {
        width: 216,
        height: 88,
        marginBottom: 8,
        borderRadius: 8,
    },
});
