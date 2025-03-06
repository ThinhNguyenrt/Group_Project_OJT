import { useState } from "react";
import { StyleSheet, View, Button, Image, TouchableOpacity, Text } from "react-native"
import { Platform } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import background from '../../../assets/dashboardImage/Grid Visualization.png';
import GenerateButton from "./GenerateButton";

const aiEdit = () => {

    const [image, setImage] = useState(null);
    const uploatImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };


    return (
        <View style={style.Container}>
            
            {Platform.OS === "web" ? (
                <View>
                    {image ? (
                        <Image source={{ uri: image }} style={style.image} />
                    ) : (
                        <TouchableOpacity onPress={() => document.getElementById("fileInput").click()} style={style.chooceImage}>
                            <View style={{  alignItems: "center",}}>
                                <input id="fileInput" type="file" accept="image/*" onChange={uploatImage} style={{ display: "none" }} />
                                <Ionicons name="image-outline" size={50} color='#A8A8A8'/>
                                <Text style={style.textUploadImage}>Upload a reference image</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                </View>
            ) : (
                <TouchableOpacity onPress={() => {}}>
                    <Text >Choose Image</Text>
                </TouchableOpacity>
            )}

            <View style={style.backgroundGenerate}>
                <TouchableOpacity style={style.generate}>
                    <Ionicons name='sparkles-sharp' size={30} />
                    <Text style={style.textGenerate}>Generate</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 20}}>
                <GenerateButton  name="abs" />
                <GenerateButton name="dumamay" />
            </View>  
        </View>
    );
}

export default aiEdit

const style = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
    },
    image: {
        width: 1010,
        height: 510,
        marginLeft: 120,
        marginTop: 70,
        borderWidth: 3,
        borderColor: '#A8A8A8',
        borderRadius: 5,
    },
    chooceImage: {
        borderColor: '#A8A8A8',
        borderBottomWidth: 2,
        width: 300,
        height: 150,
        marginLeft: 500,
        marginTop: 250,
        paddingTop: 35,
       
    },
    textUploadImage: {
        color: '#A8A8A8',
        fontFamily: 'Arial',
        fontSize: 17,
        marginTop: 5,
    },
    generate:{
        marginTop: 14,
        alignItems: "center",
    },
    textGenerate: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        fontSize: 13,
    },
    backgroundGenerate: {
        backgroundColor: '#3EB8AF',
        width: 70,
        height: 70,
        borderRadius: 10,
        position: "absolute",
    }
})

