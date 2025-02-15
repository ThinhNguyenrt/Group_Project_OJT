import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const PromptInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Describe the image you want to generate"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
  },
  input: {
    fontSize: 16,
  },
});

export default PromptInput;
