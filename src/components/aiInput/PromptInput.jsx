import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PromptInput = () => {
  return (
    <View style={styles.container}>
      <Icon name="sparkles" size={20} color="gray" style={styles.iconLeft} />
      <TextInput
        placeholder="Describe the image you want to generate"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <Icon name="send" size={20} color="gray" style={styles.iconRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    position: 'relative',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 10,
  },
  iconLeft: {
    position: 'absolute',
    left: 10,
  },
  iconRight: {
    position: 'absolute',
    right: 10,
  },
});

export default PromptInput;
