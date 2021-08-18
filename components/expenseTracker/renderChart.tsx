import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlatList,
  Platform,
} from "react-native";
import { Value } from "react-native-reanimated";
import { VictoryPie } from "victory-native";

import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { RenderItemProps } from "../../interfaces";
import { processCategoryDataToDisplay } from "./processCategoryDataToDisplay";

export const renderChart = (
  categories: RenderItemProps[],
  selectedCategory: RenderItemProps
) => {
  const chartData = processCategoryDataToDisplay(categories);
  const colorScales = chartData.map((item) => item.color);
  const totalExpenseCount = chartData.reduce(
    (a, b) => a + (b.expenseCount || 0),
    0
  );

  if (Platform.OS === "ios") {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <VictoryPie
          data={chartData}
          labels={(datum) => `${datum.y}`}
          radius={({ datum }) =>
            selectedCategory && selectedCategory.name === datum.name
              ? SIZES.width * 0.4
              : SIZES.width * 0.4 - 10
          }
          innerRadius={70}
          labelRadius={({ innerRadius }) => {
            let ret: number = 0;
            if (typeof innerRadius === "number") {
              ret = (SIZES.width * 0.4 + innerRadius) / 2.5;
            } else {
              ret = (SIZES.width * 0.4) / 2.5;
            }
            return ret;
          }}
        />
      </View>
    );
  }
  return <div></div>;
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  renderCategoryListItemButton: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  renderCategoryListItemImage: {
    width: 20,
    height: 20,
  },
  renderCategoryListText: {
    marginLeft: SIZES.base,
    color: COLORS.primary,
    ...FONTS.h4,
  },
  renderCategoryListView: {
    paddingHorizontal: SIZES.padding - 5,
  },
  renderCategoryListButton: {
    flexDirection: "row",
    marginVertical: SIZES.base,
    justifyContent: "center",
  },
  renderCategoryListImage: {
    marginLeft: 5,
    width: 15,
    height: 15,
    alignSelf: "center",
  },
});
