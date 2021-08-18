import React from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { RenderItemProps } from "../../interfaces";
import { processCategoryDataToDisplay } from "./processCategoryDataToDisplay";

export const renderExpenseSummary = (
  categories: RenderItemProps[],
  selectedCategory: RenderItemProps,
  setSelectCategoryByName: (arg0: string) => void
) => {
  const data = processCategoryDataToDisplay(categories);
  const renderItem: React.FC<RenderItemProps> = (item) => (
    <React.Fragment>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 40,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor:
            selectedCategory && selectedCategory.name == item.name
              ? item.color
              : COLORS.white,
        }}
        onPress={() => {
          let categoryName = item.name;
          setSelectCategoryByName(categoryName);
        }}
      >
        {/* Name/Category */}
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.white
                  : item.color,
              borderRadius: 5,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              color:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.white
                  : COLORS.primary,
              ...FONTS.h3,
            }}
          >
            {item.name}
          </Text>
        </View>
        {/* Expenses */}
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              color:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.white
                  : COLORS.primary,
              ...FONTS.h3,
            }}
          >
            {item.y} USD - {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
  return (
    <View style={{ padding: SIZES.padding }}>
      <FlatList
        data={data}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};
