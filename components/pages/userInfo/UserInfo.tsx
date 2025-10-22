import CButton from "@/components/commons/CButton/CButton";
import CInput from "@/components/commons/CInput/CInput";
import { supabase } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

// Validation Schema با Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("نام و نام خانوادگی الزامی است"),
  email: Yup.string()
    .required("این فیلد الزامی است")
    .test(
      "is-email-or-phone",
      "باید یا ایمیل معتبر یا شماره تلفن معتبر وارد کنید",
      (value) => {
        if (!value) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(\+98|0)?9\d{9}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),
});

const UserInfo = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();
  const checkUserInfo = async () => {
    const name = await AsyncStorage.getItem("name");
    const email = await AsyncStorage.getItem("email");
    if (name && email) {
      router.replace("/list");
    }
  };
  useEffect(() => {
    checkUserInfo();
  }, []);
  // تابع ثبت اطلاعات با Supabase
  const submitUserData = async (values: { name: string; email: string }) => {
    await AsyncStorage.setItem("name", values.name);
    await AsyncStorage.setItem("email", values.email);
    try {
      // بررسی کاربر تکراری
      const { data: existingUser, error: checkError } = await supabase
        .from("users")
        .select("*")
        .eq("contactInfo", values.email)
        .maybeSingle();

      if (checkError) {
        console.log("خطا در بررسی داده‌ها:", checkError);
        alert("خطا در بررسی داده‌ها");
        return false;
      }

      if (existingUser) {
        alert("این کاربر قبلاً ثبت شده است");
        return true; // برای ریدایرکت
      }

      // درج اطلاعات جدید
      const { error: insertError } = await supabase
        .from("users")
        .insert([{ name: values.name, contactInfo: values.email }]);

      if (insertError) throw insertError;

      alert("اطلاعات ثبت شد!");
      return true;
    } catch (err: any) {
      console.log("خطا در ثبت اطلاعات:", err);
      alert("خطا در ثبت اطلاعات: " + err.message);
      return false;
    }
  };

  // Formik
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema,
    onSubmit: async (values) => {
      const shouldRedirect = await submitUserData(values);
      if (shouldRedirect) {
        router.replace("/list"); // فقط بعد از موفقیت یا تکراری بودن
      }
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/bg.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={styles.title}>خوش آمدید</Text>
        <Text style={styles.subtitle}>لطفا اطلاعات خود را وارد کنید.</Text>

        <View style={styles.formContainer}>
          <CInput
            placeholder="نام و نام خانوادگی"
            value={formik.values.name}
            onChangeText={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <Text style={styles.error}>{formik.errors.name}</Text>
          )}

          <CInput
            placeholder="شماره تلفن یا ایمیل"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <Text style={styles.error}>{formik.errors.email}</Text>
          )}

          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Text style={styles.link}>سیاست‌های حریم خصوصی را می‌پذیرم.</Text>
          </TouchableOpacity>

          <CButton title="ثبت اطلاعات" onPress={formik.handleSubmit} />
        </View>

        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={() => setShowModal(false)}
        >
          <PrivacyPolicy />
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={styles.closeButton}
          >
            <Text style={{ color: "#fff" }}>بستن</Text>
          </TouchableOpacity>
        </Modal>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    fontFamily: "dana",
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 16,
    fontFamily: "dana",
  },
  formContainer: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    padding: 18,
    overflow: "hidden",
    direction: "rtl",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontFamily: "dana",
    marginBottom: 10,
    fontSize: 12,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 6,
    fontFamily: "dana",
  },
  closeButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    margin: 20,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default UserInfo;
