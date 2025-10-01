import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: "https://100tips.vercel.app/" }} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
