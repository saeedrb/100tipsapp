import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const PrivacyPolicy: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>سیاست حریم خصوصی</Text>

      <Text style={styles.sectionTitle}>۱. اطلاعات جمع‌آوری شده</Text>
      <Text style={styles.text}>
        ما ممکن است اطلاعات زیر را جمع‌آوری کنیم:
        {"\n"}- اطلاعاتی که شما ارائه می‌کنید، مانند نام، ایمیل یا محتواهای ثبت شده.
        {"\n"}- اطلاعاتی که به‌صورت خودکار جمع‌آوری می‌شوند، مانند نوع دستگاه، سیستم عامل و رفتار در اپ.
      </Text>

      <Text style={styles.sectionTitle}>۲. استفاده از اطلاعات</Text>
      <Text style={styles.text}>
        اطلاعات جمع‌آوری شده ممکن است برای موارد زیر استفاده شود:
        {"\n"}- ارائه خدمات و عملکرد بهتر اپ
        {"\n"}- بهبود تجربه کاربری
        {"\n"}- ارسال اطلاع‌رسانی‌ها یا خبرنامه‌ها (در صورت تمایل شما)
      </Text>

      <Text style={styles.sectionTitle}>۳. محافظت از اطلاعات</Text>
      <Text style={styles.text}>
        ما از روش‌های استاندارد امنیتی برای محافظت از اطلاعات شما استفاده می‌کنیم، اما هیچ روش انتقال داده از طریق اینترنت یا ذخیره‌سازی دیجیتال 100٪ ایمن نیست.
      </Text>

      <Text style={styles.sectionTitle}>۴. اشتراک‌گذاری اطلاعات</Text>
      <Text style={styles.text}>
        ما اطلاعات شما را به شخص ثالث نمی‌فروشیم یا اجاره نمی‌دهیم. تنها در شرایط زیر ممکن است اطلاعات به اشتراک گذاشته شود:
        {"\n"}- در صورت الزام قانونی
        {"\n"}- برای ارائه سرویس‌های مورد نیاز از طریق شخص ثالث (مثلاً سرویس پرداخت یا ایمیل)
      </Text>

      <Text style={styles.sectionTitle}>۵. حقوق شما</Text>
      <Text style={styles.text}>
        شما می‌توانید در هر زمان به اطلاعات خود دسترسی داشته باشید، آن‌ها را اصلاح کنید یا درخواست حذف کنید.
      </Text>

      <Text style={styles.sectionTitle}>۶. تغییرات در سیاست حریم خصوصی</Text>
      <Text style={styles.text}>
        این سیاست ممکن است گاهی به‌روزرسانی شود. تغییرات مهم به شما اطلاع داده خواهد شد.
      </Text>

      <Text style={styles.sectionTitle}>۷. تماس با ما</Text>
      <Text style={styles.text}>
        برای هرگونه سؤال یا درخواست مربوط به حریم خصوصی، لطفاً با ما تماس بگیرید:
        {"\n"}100wartips@gmail.com
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});

export default PrivacyPolicy;
