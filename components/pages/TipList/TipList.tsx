import { TIPS } from "@/data/TIPS"; // مسیر داده‌ات رو اینجا درست کن
import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

// برای انیمیشن نرم باز/بسته شدن در اندروید
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ExpandableTipsList = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/bg.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <FlatList
        data={TIPS}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.container}
        renderItem={({ item, index }) => {
          const isExpanded = expandedIndex === index;
          return (
            <View style={styles.categoryCard}>
              {/* عنوان دسته */}
              <TouchableOpacity
                onPress={() => toggleExpand(index)}
                style={styles.header}
              >
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={[styles.title, getColorStyle(item.colorClass)]}>
                  {item.title}
                </Text>
                <Text style={styles.arrow}>{isExpanded ? "▼" : "▶"}</Text>
              </TouchableOpacity>

              {/* نمایش نکات در صورت باز بودن */}
              {isExpanded && (
                <View style={styles.tipsContainer}>
                  {item.tips.map((tip, i) => (
                    <Text key={i} style={styles.tipText}>
                      • {tip}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          );
        }}
      />
    </ImageBackground>
  );
};

// 🔹 تابع کمکی برای تبدیل کلاس Tailwind رنگی به استایل واقعی
const getColorStyle = (colorClass: string) => {
  if (colorClass.includes("red")) return { color: "#b91c1c" };
  if (colorClass.includes("yellow")) return { color: "#b45309" };
  if (colorClass.includes("green")) return { color: "#065f46" };
  if (colorClass.includes("blue")) return { color: "#1e3a8a" };
  if (colorClass.includes("orange")) return { color: "#9a3412" };
  if (colorClass.includes("purple")) return { color: "#581c87" };
  if (colorClass.includes("gray")) return { color: "#374151" };
  if (colorClass.includes("pink")) return { color: "#9d174d" };
  if (colorClass.includes("teal")) return { color: "#115e59" };
  if (colorClass.includes("indigo")) return { color: "#312e81" };
  return { color: "#000" };
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  background: { flex: 1},
  categoryCard: {
    backgroundColor: "#fff",
    marginVertical: 6,
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    direction: "rtl"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 22,
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  arrow: {
    fontSize: 16,
    color: "#555",
  },
  tipsContainer: {
    marginTop: 8,
    paddingLeft: 30,
  },
  tipText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
});

export default ExpandableTipsList;
