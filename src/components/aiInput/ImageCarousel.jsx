import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import AiInputImage from '../../../assets/image/AiInputImage/AiInputImage.png';

const images = [
  { id: '1', source: AiInputImage, backgroundColor: '#F4D7C7' },
  { id: '2', source: AiInputImage, backgroundColor: '#D6D1CD' },
  { id: '3', source: AiInputImage, backgroundColor: '#A7C7F0' },
  { id: '4', source: AiInputImage, backgroundColor: '#A89C88' },
];

const HexagonImage = ({ source, backgroundColor }) => (
  <View style={[styles.hexagonContainer, { backgroundColor }]}>
    <Image source={source} style={styles.image} />
  </View>
);

const ImageCarousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HexagonImage source={item.source} backgroundColor={item.backgroundColor} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
  },
  hexagonContainer: {
    width: 80,
    height: 90,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 70,
    height: 80,
    resizeMode: 'cover',
  },
});

export default ImageCarousel;