import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItem,
  FlatListProps,
} from "react-native";
import { SIZES, COLORS, FONTS, icons } from "../../constants";
import { RenderItemProps, RenderItemExpenseProps } from "../../interfaces";
import { renderIncomingExpensesTitle } from "./renderIncomingExpensesTitle";

export const renderIncomingExpenses = (selectedCategory: RenderItemProps) => {
  let allExpenses = selectedCategory ? selectedCategory.expenses : [];
  let incomingExpenses = allExpenses.filter((a) => a.status == "P");

  const renderItem: React.FC<RenderItemExpenseProps> = (item, index) => (
    <View
      style={{
        marginLeft: index == 0 ? SIZES.padding : 0,
        ...styles.renderItemView,
        ...styles.shadow,
      }}
    >
      {/* Title */}
      <View style={styles.renderItemTitleView}>
        <View style={styles.renderItemTitleImageView}>
          <Image
            source={selectedCategory.icon}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedCategory.color,
            }}
          />
        </View>

        <Text style={{ ...FONTS.h3, color: selectedCategory.color }}>
          {selectedCategory.name}
        </Text>
      </View>

      {/* Expense Description */}
      <View style={{ paddingHorizontal: SIZES.padding }}>
        {/* Title and description */}
        <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
        <Text
          style={{ ...FONTS.body3, flexWrap: "wrap", color: COLORS.darkgray }}
        >
          {item.description}
        </Text>

        {/* Location */}
        <Text style={{ marginTop: SIZES.padding, ...FONTS.h4 }}>Location</Text>
        <View style={{ flexDirection: "row" }}>
          <Image source={icons.pin} style={styles.renderItemLocationImage} />
          <Text style={styles.renderItemLocationText}>{item.location}</Text>
        </View>
      </View>

      {/* Price */}
      <View
        style={{
          ...styles.renderItemPriceView,
          backgroundColor: selectedCategory.color,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
          CONFIRM {item.total.toFixed(2)} USD
        </Text>
      </View>
    </View>
  );

  return (
    <View>
      {renderIncomingExpensesTitle()}

      {incomingExpenses.length > 0 && (
        <FlatList
          data={incomingExpenses}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}

      {incomingExpenses.length == 0 && (
        <View style={styles.recordView}>
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
        </View>
      )}
    </View>
  );
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
  renderItemView: {
    width: 300,
    marginRight: SIZES.padding,
    marginVertical: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  renderItemTitleView: {
    flexDirection: "row",
    padding: SIZES.padding,
    alignItems: "center",
  },
  renderItemTitleImageView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SIZES.base,
  },
  renderItemLocationImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray,
    marginRight: 5,
  },
  renderItemLocationText: {
    marginBottom: SIZES.base,
    color: COLORS.darkgray,
    ...FONTS.body4,
  },
  renderItemPriceView: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBottomStartRadius: SIZES.radius,
    borderBottomEndRadius: SIZES.radius,
  },
  recordView: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
});
