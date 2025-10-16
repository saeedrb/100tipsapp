import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface CInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}
const CInput: React.FC<CInputProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.input}
        placeholderTextColor={"#000000"}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 16,
  },
  input: {
    width: "95%",
    color: "#000000",
    fontSize: 16,
    padding: 16,
    fontFamily: "dana",
  },
});

export default CInput;
