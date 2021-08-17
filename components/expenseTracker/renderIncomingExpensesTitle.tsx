import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

export const renderIncomingExpensesTitle = () => (
  <View style={styles.container}>
    {/* Title */}
    <Text style={styles.title}>INCOMING EXPENSES</Text>
    <Text style={styles.subTitle}>12 Total</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: COLORS.lightGray2,
    padding: SIZES.padding,
  },
  title: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  subTitle: {
    ...FONTS.body4,
    color: COLORS.darkgray,
  },
});
