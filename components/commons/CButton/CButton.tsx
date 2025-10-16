import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CButtonProps {
  title: string;
  onPress: () => void;
}

const CButton: React.FC<CButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f59b42",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    fontFamily: "dana",
  },
  buttonText: {
    fontFamily: "dana",
    color: "#FFFFFF",
    fontSize: 16,
    // fontWeight: "bold",
  },
});

export default CButton;
