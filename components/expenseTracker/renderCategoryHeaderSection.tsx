import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { RenderItemProps } from "../../interfaces";

export const renderCategoryHeaderSection = (
  categories: RenderItemProps[],
  viewMode: string,
  setViewMode: (arg0: string) => void
) => (
  <View style={styles.outerView}>
    {/* Title */}
    <View>
      <Text style={styles.titleHeader}>CATEGORIES</Text>
      <Text style={styles.titleSubHeader}>{categories.length} Total</Text>
    </View>

    {/* Button */}
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          ...styles.chartButton,
          backgroundColor:
            viewMode == "chart" ? COLORS.secondary : COLORS.white,
        }}
        onPress={() => setViewMode("chart")}
      >
        <Image
          source={icons.chart}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...styles.menuButton,
          backgroundColor: viewMode == "list" ? COLORS.secondary : COLORS.white,
        }}
        onPress={() => setViewMode("list")}
      >
        <Image
          source={icons.menu}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  outerView: {
    flexDirection: "row",
    padding: SIZES.padding,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleHeader: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  titleSubHeader: {
    color: COLORS.darkgray,
    ...FONTS.body4,
  },
  chartButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  menuButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: SIZES.base,
  },
});
