import TipList from "@/components/pages/TipList/TipList";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SuccessScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TipList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
});