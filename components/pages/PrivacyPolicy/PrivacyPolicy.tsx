import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PrivacyPolicy() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>سیاست‌نامه حریم خصوصی</Text>

        <Text style={styles.paragraph}>
          اپلیکیشن <Text style={styles.bold}>[نام اپلیکیشن شما]</Text> متعهد است
          که از اطلاعات شخصی کاربران به بهترین شکل محافظت کند. هدف ما ارائه
          خدماتی امن، قابل اعتماد و شفاف است. این سند توضیح می‌دهد که چه داده‌هایی
          جمع‌آوری می‌شود، چرا جمع‌آوری می‌شود و چگونه از آن‌ها استفاده می‌کنیم.
        </Text>

        <Text style={styles.section}>اطلاعاتی که جمع‌آوری می‌کنیم</Text>
        <Text style={styles.paragraph}>
          ما ممکن است اطلاعات زیر را از شما دریافت کنیم:{"\n"}
          - نام و نام خانوادگی{"\n"}
          - شماره تماس یا ایمیل{"\n"}
          - اطلاعات مربوط به ورود و استفاده شما از اپلیکیشن{"\n"}
          - داده‌های فنی (مانند نوع دستگاه، سیستم‌عامل و نسخه اپلیکیشن)
        </Text>

        <Text style={styles.section}>نحوه استفاده از اطلاعات</Text>
        <Text style={styles.paragraph}>
          ما از داده‌های جمع‌آوری‌شده برای اهداف زیر استفاده می‌کنیم:{"\n"}
          1. ارائه و بهبود خدمات اپلیکیشن{"\n"}
          2. شخصی‌سازی تجربه کاربری{"\n"}
          3. برقراری ارتباط در صورت نیاز (مانند ارسال اعلان‌ها یا پشتیبانی){"\n"}
          4. افزایش امنیت و جلوگیری از سوءاستفاده
        </Text>

        <Text style={styles.section}>امنیت داده‌ها</Text>
        <Text style={styles.paragraph}>
          ما از روش‌های امنیتی استاندارد برای حفاظت از اطلاعات کاربران استفاده
          می‌کنیم. با این حال، هیچ روشی در انتقال داده‌ها از طریق اینترنت یا
          ذخیره‌سازی الکترونیکی به‌طور کامل امن نیست. بنابراین، ما تضمین امنیت
          مطلق را نمی‌دهیم اما نهایت تلاش خود را در این زمینه انجام می‌دهیم.
        </Text>

        <Text style={styles.section}>اشتراک‌گذاری اطلاعات با اشخاص ثالث</Text>
        <Text style={styles.paragraph}>
          اطلاعات شخصی شما به هیچ وجه به اشخاص ثالث فروخته یا منتقل نمی‌شود. 
          اشتراک‌گذاری داده‌ها تنها در موارد زیر ممکن است انجام شود:{"\n"}
          - با رضایت مستقیم شما{"\n"}
          - در صورت الزام قانونی توسط مراجع قضایی یا قانونی{"\n"}
          - برای ارائه خدماتی که نیازمند همکاری با ارائه‌دهندگان خدمات (مانند سرویس پیامک یا ایمیل) باشد
        </Text>

        <Text style={styles.section}>حقوق کاربران</Text>
        <Text style={styles.paragraph}>
          شما حق دارید:{"\n"}
          - اطلاعات شخصی خود را مشاهده یا ویرایش کنید{"\n"}
          - درخواست حذف اطلاعات شخصی خود را داشته باشید{"\n"}
          - در صورت بروز هرگونه مشکل، با پشتیبانی تماس بگیرید
        </Text>

        <Text style={styles.section}>تغییرات در سیاست‌نامه</Text>
        <Text style={styles.paragraph}>
          ممکن است این سیاست‌نامه در طول زمان تغییر کند. در صورت تغییرات مهم،
          تاریخ آخرین به‌روزرسانی در ابتدای همین صفحه درج خواهد شد. توصیه
          می‌کنیم به‌طور دوره‌ای این بخش را مرور کنید.
        </Text>

        <Text style={styles.section}>تماس با ما</Text>
        <Text style={styles.paragraph}>
          در صورت داشتن هرگونه سوال یا نگرانی درباره این سیاست‌نامه، می‌توانید از
          طریق روش‌های زیر با ما در تماس باشید:{"\n"}
          - ایمیل: [ایمیل پشتیبانی شما]{"\n"}
          - شماره تماس: [شماره تماس شما]
        </Text>

        <Text style={styles.footer}>📌 آخرین به‌روزرسانی: [تاریخ]</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
    fontFamily: "dana",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  section: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: "justify",
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});
