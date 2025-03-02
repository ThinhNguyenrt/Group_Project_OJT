import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import React, { useState, useEffect  } from 'react';
import { Picker } from "@react-native-picker/picker";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const designs = [
    { id: '1', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'The house', edited: '1', size: '1 GB', lastViewed: 'N/A' },
    { id: '2', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Garden', edited: '3', size: '12 MB', lastViewed: 'N/A' },
    { id: '3', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Tea', edited: '1', size: '3.8 MB', lastViewed: 'N/A' },
    { id: '4', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Character', edited: '3', size: '2 GB', lastViewed: 'N/A' },
    { id: '5', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Floor Lamp', edited: '2', size: '3.06 MB', lastViewed: '5 days ago' },
    { id: '6', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Handle', edited: '5', size: '4.92 MB', lastViewed: '5 days ago' },
    { id: '7', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Panel Curtain', edited: '2', size: '4.76 MB', lastViewed: '5 days ago' },
];

const TrashList = () =>{

    const[data, setData] = useState(designs);

    const[sortData, setSortData] = useState('newest');

    const handSort = (stypeSort) =>{
        let sortedData = [... data];
        switch (stypeSort){
            case 'newest':
                sortedData.sort((a,b) => a.edited - b.edited);
                break;
            case 'oldest':
                sortedData.sort((a,b) => b.edited - a.edited);
                break;
            default:
                break; 
        }
        setData(sortedData);
    }

    useEffect(() =>{
        handSort(sortData);
    }, [])

    function onChangeSortValue(value){
        setSortData(value);
        handSort(value);
    } 

    
    return(
        <ScrollView>
            <View style = {Style.Container}>

                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Picker style ={Style.Picker} onValueChange={onChangeSortValue} selectedValue={sortData} >
                            <Picker.Item label="Sort: Newest first" value="newest"/>
                            <Picker.Item label="Sort: Oldest first" value="oldest"/>
                        </Picker>
                    </View>
                    <View>
                        <TouchableOpacity style={[Style.borderIconAntDesign, {marginLeft: 1150}]}>
                            <AntDesign  name="bars" size={27} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[Style.borderIconAntDesign, {marginLeft: 20, paddingTop: 3, paddingLeft: 3,}]}>
                            <AntDesign name="appstore-o" size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Style.HeaderTable}>
                    <View style={[Style.Colum, {flex: 6}]}>
                        <Text style={Style.TextHeaderTable}>Name</Text>
                    </View>
                    <View style={[Style.Colum, {flex: 2}]}>
                        <Text style={Style.TextHeaderTable}>Size</Text>
                    </View>
                    <View style={[Style.Colum, {flex: 4}]}>
                        <Text style={Style.TextHeaderTable}>Last viewed</Text>
                    </View>
                </View>

                <View>
                    {data.map((item) => (
                            <View style={Style.AllItem}>
                                <View style={[Style.Colum, {flex: 6}]}>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View>
                                            <Image source={{ uri: item.imageUrl }} style={Style.ImageOfAllItem}/>
                                        </View>
                                        <View>
                                            <Text style={[Style.TextOfAllItem, {marginLeft: 15,}]}>{item.name}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[Style.Colum, {flex: 2}]}>
                                    <Text style={Style.TextOfAllItem}>{item.size}</Text>
                                </View>
                                <View style={[Style.Colum, {flex: 1}]}>
                                    <Text style={Style.TextOfAllItem}>{item.edited} days ago</Text>
                                </View>
                                <View style={[Style.Colum, {flex: 3, flexDirection: 'row'}]}>
                                    <TouchableOpacity style={{marginRight: 25}}>
                                        <MaterialCommunityIcons name="history" size={20}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign name="delete" size={18}/>
                                    </TouchableOpacity>
                                </View>            
                            </View>
                        )
                    )}
                                    
                </View>
                
            </View>
        </ScrollView>
    );

}

const Style = StyleSheet.create({
    Container: {
        flex: 1,
        marginLeft: 40,
        marginTop: 20,
        marginBottom: 20,
    },
    Picker: {
        width: 120,
        height: 30,
        borderColor: '#989898',
        borderWidth: 1.2,
        borderRadius: 10,
        padding: 4,
        fontSize: 11,
    },
    borderIconAntDesign: {
        width: 30,
        height: 30,
        borderColor: '#989898',
        borderWidth: 1.2,
        borderRadius: 7,
    },
    HeaderTable: {
        flexDirection: 'row',
        marginTop: 15,
    },
    TextHeaderTable: {
        fontSize: 13,
        marginTop: 15,
        color: '#484848',
    },
    Colum: {
        justifyContent: 'center',
    },
    AllItem: {
        flexDirection: 'row',
        alignItems: 'center', 
        gap: 10,
        marginTop: 10,
    },
    ImageOfAllItem:{
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    TextOfAllItem: {
        fontFamily: "Arial",
        fontSize: 11,
        fontWeight: 'bold',
    },
});

export default TrashList;