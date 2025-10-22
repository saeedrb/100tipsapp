import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { I18nManager } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  }, []);
  const [fontsLoaded] = useFonts({
    dana: require("../assets/fonts/dana.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
      }}
    />
  );
}
