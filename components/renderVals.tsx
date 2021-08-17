import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";
import { RenderItemProps } from "../interfaces";

export const renderNavBar = () => (
  <View style={styles.renderNavBarView}>
    <TouchableOpacity style={styles.renderNavBarButtonBack}>
      <Image source={icons.back_arrow} style={styles.renderNavBarBackIcon} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.renderNavBarButtonMore}>
      <Image source={icons.more} style={styles.renderNavBarBackIcon} />
    </TouchableOpacity>
  </View>
);

export const renderHeader = () => (
  <View style={styles.renderHeaderView}>
    <View>
      <Text style={styles.renderHeaderH2}>My Expenses</Text>
      <Text style={styles.renderHeaderH3}>Summary</Text>
    </View>
    <View style={styles.renderHeaderInnerView}>
      <View style={styles.renderHeaderImageContainer}>
        <Image source={icons.calendar} style={styles.renderHeaderIcon} />
      </View>

      <View style={styles.renderHeaderTextContainer}>
        <Text style={styles.renderHeaderTextDate}>August 16th, 2021</Text>
        <Text style={styles.renderHeaderTextBody}>
          18% more than last month
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  renderNavBarView: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  renderNavBarButtonBack: {
    justifyContent: "center",
    width: 50,
  },
  renderNavBarBackIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  renderNavBarButtonMore: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: 50,
  },
  renderHeaderView: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  renderHeaderH2: {
    color: COLORS.primary,
    ...FONTS.h2,
  },
  renderHeaderH3: {
    color: COLORS.darkgray,
    ...FONTS.h3,
  },
  renderHeaderInnerView: {
    flexDirection: "row",
    marginTop: SIZES.padding,
    alignItems: "center",
  },
  renderHeaderImageContainer: {
    backgroundColor: COLORS.lightGray,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  renderHeaderIcon: {
    height: 20,
    width: 20,
    tintColor: COLORS.lightBlue,
  },
  renderHeaderTextContainer: {
    marginLeft: SIZES.padding,
  },
  renderHeaderTextDate: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  renderHeaderTextBody: {
    color: COLORS.darkgray,
    ...FONTS.body3,
  },
});
