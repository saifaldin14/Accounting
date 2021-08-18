import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Svg from "react-native-svg";
import { VictoryPie } from "victory-native";

import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { RenderItemProps } from "../../interfaces";
import { processCategoryDataToDisplay } from "./processCategoryDataToDisplay";

export const renderChart = (
  categories: RenderItemProps[],
  selectedCategory: RenderItemProps,
  setSelectCategoryByName: (arg0: string) => void
) => {
  const chartData = processCategoryDataToDisplay(categories);
  const colorScales = chartData.map((item) => item.color);
  const totalExpenseCount = chartData.reduce(
    (a, b) => a + (b.expenseCount || 0),
    0
  );

  const VictoryPieComponent = () => (
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
      style={{
        labels: { fill: "white", ...FONTS.body3 },
        parent: {
          boxShadow: "10",
          //...styles.shadow,
        },
      }}
      width={SIZES.width * 0.8}
      height={SIZES.width * 0.8}
      colorScale={colorScales}
      events={[
        {
          target: "data",
          eventHandlers: {
            onPress: () => {
              return [
                {
                  target: "labels",
                  mutation: (props) => {
                    const categoryName = chartData[props.index].name;
                    setSelectCategoryByName(categoryName);
                  },
                },
              ];
            },
          },
        },
      ]}
    />
  );

  const ChartText = () => (
    <View style={{ position: "absolute", top: "42%", left: "42%" }}>
      <Text style={{ ...FONTS.h1, textAlign: "center" }}>
        {totalExpenseCount}
      </Text>
      <Text style={{ ...FONTS.body3, textAlign: "center" }}>Expenses</Text>
    </View>
  );

  if (Platform.OS === "ios") {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <VictoryPieComponent />
        <ChartText />
      </View>
    );
  } else {
    // Android workaround by wrapping VictoryPie with SVG
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Svg
          width={SIZES.width}
          height={SIZES.width}
          style={{ width: "100%", height: "auto" }}
        >
          <VictoryPieComponent />
        </Svg>
        <ChartText />
      </View>
    );
  }
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
