import React from "react";
import { StyleSheet, Text } from "react-native";

const CText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}
const styles = StyleSheet.create({
  text: {
    fontFamily: "dana",
    fontSize: 16,
    padding: 8,
    textAlign: "right",
  },
});
export default CText